import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // State to hold the list of plants fetched from the backend
  const [plants, setPlants] = useState([]);
  // State to hold the current search term for filtering plants
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect to fetch plants from the backend on component mount
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plants) => setPlants(plants));
  }, []);

  // Function to add a new plant to the state after successful POST
  const addPlant = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  // Filter plants based on the search term (case-insensitive)
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      {/* Form to add new plants */}
      <NewPlantForm addPlant={addPlant} />
      {/* Search bar to filter plants */}
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {/* List of plants, filtered by search */}
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
