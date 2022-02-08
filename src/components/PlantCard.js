import React, { useState } from "react";

function PlantCard({ plant, onUpdatePlantPrice, onDeletePlant }) {
  const [inStock, setInStock] = useState(true)
  const [isClicked, setIsClicked] = useState(false)
  const [newPrice, setNewPrice] = useState(plant.price)

  const toggleInStock = () => {
    setInStock(() => !inStock)
  }

  const toggleIsClicked = () => {
    setIsClicked(() => !isClicked)
  }


  const handleNewPrice = (e) => {
    e.preventDefault()
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: newPrice
      })
    })
      .then(r => r.json())
      .then(updatedPlant => {
        onUpdatePlantPrice(updatedPlant)
        toggleIsClicked()

      })

  }

  const deletePlant = () => {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
  })
    .then(r => r.json())
    .then(() => onDeletePlant(plant))
  }


  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button onClick={toggleIsClicked}>update price</button>
      {inStock ? (
        <button onClick={toggleInStock} className="primary">In Stock</button>
      ) : (
        <button onClick={toggleInStock}>Out of Stock</button>
      )}
      {isClicked ? (
        <form onSubmit={handleNewPrice}>
          <input type="text" name="newPrice" placeholder="Enter new price" value={newPrice} onChange={(event) => setNewPrice(event.target.value)} />
        </form>
      ) : null}
      <button onClick={deletePlant}>delete</button>
    </li>
  );
}

export default PlantCard;
