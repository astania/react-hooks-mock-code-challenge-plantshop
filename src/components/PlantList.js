import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantsToDisplay, onUpdatePlantPrice, onDeletePlant }) {
  return (
    <ul className="cards">{plantsToDisplay.map(plant => <PlantCard plant={plant} key={plant.name} onUpdatePlantPrice={onUpdatePlantPrice} onDeletePlant={onDeletePlant} />) /* render PlantCards components in here */}</ul>
  );
}

export default PlantList;
