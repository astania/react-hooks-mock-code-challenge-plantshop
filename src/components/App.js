import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  
  const [plantsToDisplay, setPlantsToDisplay] = useState([])
  const plants = [...plantsToDisplay]
  

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(r => r.json())
      .then(allPlants => setPlantsToDisplay(allPlants))
  }, [])

  console.log(plants)


  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} plantsToDisplay={plantsToDisplay} setPlantsToDisplay={setPlantsToDisplay}/>
    </div>
  );
}

export default App;
