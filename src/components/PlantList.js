import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, search, setPlants}) {
  
  const filPlants = plants.filter((plant)=>{
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })
  
  function handleDelete(id){
    fetch(`http://localhost:6001/plants/${id}`,
    {method: "DELETE",
     headers: {"Content-Type": "application/json"}
    
    })
    setPlants(plants=> plants.filter(plant=> plant.id !==id))
    }

  const cardOfPlant = filPlants.map((plant)=>{
    return <PlantCard 
    key={plant.id} 
    image={plant.image} 
    name={plant.name} 
    id={plant.id} 
    price={plant.price}
    handleDelete={handleDelete} />
  })
  return (
    <ul className="cards">{cardOfPlant}</ul>
  );
}

export default PlantList;
