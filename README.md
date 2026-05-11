# Plantsy - Plant Shop Management App

A React application for managing a plant shop inventory. Users can view all plants, add new plants, mark plants as sold out, and search for plants by name.

## Screenshots

![App Screenshot](./screenshot.png)

## Features

- **View All Plants**: Displays all plants from the backend on app startup
- **Add New Plants**: Submit a form to add new plants to the inventory
- **Mark as Sold Out**: Toggle plants between "In Stock" and "Out of Stock" (client-side only)
- **Search Plants**: Filter plants by name in real-time

## Tech Stack

- **Frontend**: React 18, Vite
- **Backend**: JSON Server (for development)
- **Testing**: Vitest, React Testing Library
- **Styling**: CSS

## Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run server` to start the backend on port 6001
4. In a new terminal, run `npm run dev` to start the frontend on port 5173

## Usage

1. Open [http://localhost:5173](http://localhost:5173) in your browser
2. View all plants loaded from the backend
3. Use the form to add new plants
4. Click "In Stock" buttons to mark plants as sold out
5. Use the search bar to filter plants by name

## API Endpoints

### GET /plants
Returns all plants in the inventory.

### POST /plants
Adds a new plant to the inventory.

**Request Body:**
```json
{
  "name": "string",
  "image": "string",
  "price": "string"
}
```

## Testing

Run `npm run test` to execute the test suite.

## Contributing

1. Create a feature branch
2. Make changes and run tests
3. Submit a pull request

## License

This project is licensed under the MIT License.
