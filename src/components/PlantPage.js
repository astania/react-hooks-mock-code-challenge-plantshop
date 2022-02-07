import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, plantsToDisplay, setPlantsToDisplay}) {


  return (
    <main>
      <NewPlantForm />
      <Search plants={plants} plantsToDisplay={plantsToDisplay} setPlantsToDisplay={setPlantsToDisplay}/>
      <PlantList plantsToDisplay={plantsToDisplay}/>
    </main>
  );
}

export default PlantPage;
