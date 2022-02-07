import React, { useState } from "react";

function NewPlantForm() {
  
  const plantData = {
    name: "",
    image: "",
    price: 0
  }

  const [newPlant, setNewPlant] = useState(plantData)




  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" placeholder="Plant name" value={newPlant.name}/>
        <input type="text" name="image" placeholder="Image URL" value={newPlant.image} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={newPlant.price} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
