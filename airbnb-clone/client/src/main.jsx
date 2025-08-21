import React from 'react'
import { createRoot } from 'react-dom/client'

function App(){
  const [listings, setListings] = React.useState([]);

  React.useEffect(()=>{
    fetch(import.meta.env.VITE_API_URL ? `${import.meta.env.VITE_API_URL}/api/listings` : 'http://localhost:5001/api/listings')
      .then(r => r.json())
      .then(setListings)
      .catch(()=> setListings([]));
  },[]);

  return (
    <div style={{fontFamily:'system-ui, sans-serif', padding:'16px'}}>
      <h1>🏠 Airbnb Clone</h1>
      <p>Simple listings fetched from backend.</p>
      <ul>
        {listings.map(l => (
          <li key={l.id}>
            <strong>{l.title}</strong> — {l.city} — ₹{l.pricePerNight}/night
          </li>
        ))}
      </ul>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
