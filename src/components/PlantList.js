import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantsToDisplay, onUpdatePlantPrice}) {
  return (
    <ul className="cards">{plantsToDisplay.map(plant => <PlantCard plant={plant} key={plant.name} onUpdatePlantPrice={onUpdatePlantPrice}/>) /* render PlantCards components in here */}</ul>
  );
}

export default PlantList;
