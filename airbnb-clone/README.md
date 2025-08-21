# Airbnb Clone (MERN Minimal)

## Stack
- React (Vite) client
- Node + Express server
- MongoDB (optional in this minimal demo; API has in-memory fallback)
- QA: Postman collection + Cypress sample

## Quickstart
```bash
# server
cd server && cp .env.example .env && npm install && npm run dev

# client (new terminal)
cd ../client && cp .env.example .env && npm install && npm run dev
```

Open client: http://localhost:5173 (default Vite)
API runs at: http://localhost:5001

## Endpoints
- `GET /api/listings`
- `POST /api/listings`
- `POST /api/bookings`

## Notes
Mongo connection is attempted; if not available, API still works using in-memory arrays.
