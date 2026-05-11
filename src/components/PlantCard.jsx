import React, { useState } from "react";

function PlantCard({ plant }) {
  // Local state to track if the plant is in stock (non-persisting)
  const [inStock, setInStock] = useState(true);

  // Function to toggle the inStock state
  const toggleStock = () => {
    setInStock(!inStock);
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {/* Button to toggle stock status */}
      {inStock ? (
        <button className="primary" onClick={toggleStock}>
          In Stock
        </button>
      ) : (
        <button onClick={toggleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
