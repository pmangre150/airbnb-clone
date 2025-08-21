import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/airbnb_clone';

// Mongo connection (safe to run even if Mongo isn't present; it will log error)
mongoose.connect(MONGO_URI).then(() => {
  console.log('✅ Connected to MongoDB');
}).catch(err => {
  console.log('⚠️ MongoDB connection failed (dev mode).', err.message);
});

app.get('/', (req, res) => res.json({ ok: true, service: 'airbnb-clone-api' }));

// Minimal Listings API (in-memory fallback for demo)
let listings = [
  { id: 'l1', title: 'Cozy Studio', city: 'Pune', pricePerNight: 1200 },
  { id: 'l2', title: 'Beach House', city: 'Goa', pricePerNight: 4500 }
];

app.get('/api/listings', (req, res) => res.json(listings));
app.post('/api/listings', (req, res) => {
  const body = req.body || {};
  const item = { id: 'l'+(listings.length+1), ...body };
  listings.push(item);
  res.status(201).json(item);
});

let bookings = [];
app.post('/api/bookings', (req,res)=>{
  const body = req.body || {};
  if(!body.listingId) return res.status(400).json({error: 'listingId required'});
  const bk = { id:'b'+(bookings.length+1), ...body };
  bookings.push(bk);
  res.status(201).json(bk);
});

app.listen(PORT, () => console.log(`🚀 API running on http://localhost:${PORT}`));
