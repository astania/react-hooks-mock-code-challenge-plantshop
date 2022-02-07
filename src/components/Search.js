import React, { useState } from "react";

function Search({plants, setPlantsToDisplay}) {
  const [search, setSearch] = useState("")
  

  const handleSearch = (e) => {
    e.preventDefault()
    console.log(search)
    const searchToLowerCase = search.toLowerCase()
    const plantsToShow = plants.filter(plant => plant.name.toLowerCase().includes(searchToLowerCase))
    setPlantsToDisplay(plantsToShow)
  }

  return (
    <div className="searchbar">
      <form onSubmit={handleSearch}>
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={search}
        placeholder="Type a name to search..."
        onChange={(e) => setSearch(() => e.target.value)}
      />
      </form>
    </div>
  );
}

export default Search;
