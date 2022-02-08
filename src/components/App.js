import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([])
  const [plantsToDisplay, setPlantsToDisplay] = useState([])
  


  

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(r => r.json())
      .then(allPlants => {
        setPlantsToDisplay(allPlants)
        setPlants(allPlants)
      })
  }, [])

  const addNewPlant = (addedPlant) => {
    console.log(addedPlant)
    const newPlantsList = [...plants, addedPlant]
    console.log(newPlantsList)
    setPlants(() => newPlantsList)
    setPlantsToDisplay(() => newPlantsList)
  }

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} plantsToDisplay={plantsToDisplay} setPlantsToDisplay={setPlantsToDisplay} onNewPlantSubmit={addNewPlant}/>
    </div>
  );
}

export default App;
