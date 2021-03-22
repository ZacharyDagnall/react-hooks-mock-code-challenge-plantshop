import React, {useState} from "react";

function NewPlantForm({setPlants}) {
  const [newPlant, setNewPlant] = useState({
    name: "",
    image: "",
    price: ""
  })
  
  function handleChange(e){
    let key = e.target.name
    let value = e.target.value
    setNewPlant({...newPlant, [key]: value})
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:6001/plants",
    {method: "POST",
      headers: {'Content-Type': 'application/json',
      accept: "application/json"},
     body: JSON.stringify(newPlant)})
     .then(r=>r.json())
     .then(data=> setPlants(plants =>[...plants, data]))
  }
  


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="name" value={newPlant.name} placeholder="Plant name" />
        <input onChange={handleChange} type="text" name="image" value={newPlant.image} placeholder="Image URL" />
        <input onChange={handleChange} type="number" name="price" value={newPlant.price} step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
