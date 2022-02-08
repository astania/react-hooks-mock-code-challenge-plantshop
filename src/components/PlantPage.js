import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, plantsToDisplay, setPlantsToDisplay, onNewPlantSubmit, onUpdatePlantPrice}) {


  return (
    <main>
      <NewPlantForm onNewPlantSubmit={onNewPlantSubmit}/>
      <Search plants={plants} plantsToDisplay={plantsToDisplay} setPlantsToDisplay={setPlantsToDisplay}/>
      <PlantList plantsToDisplay={plantsToDisplay} onUpdatePlantPrice={onUpdatePlantPrice}/>
    </main>
  );
}

export default PlantPage;
