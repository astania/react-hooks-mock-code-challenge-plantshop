import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  
  const [plantsToDisplay, setPlantsToDisplay] = useState([])
  const [plants, setPlants] = useState([])

  const addNewPlant = (addedPlant) => {
    const newPlantsList = [...plants, addedPlant]
    setPlants(newPlantsList)
  }
  

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(r => r.json())
      .then(allPlants => {
        setPlantsToDisplay(allPlants)
        setPlants(allPlants)
      })
  }, [])



  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} plantsToDisplay={plantsToDisplay} setPlantsToDisplay={setPlantsToDisplay} onNewPlantSubmit={addNewPlant}/>
    </div>
  );
}

export default App;
