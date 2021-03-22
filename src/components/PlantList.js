import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, search}) {
  
  const filPlants = plants.filter((plant)=>{
    return plant.name.includes(search)
  })
  

  const cardOfPlant = filPlants.map((plant)=>{
    return <PlantCard 
    key={plant.id} 
    image={plant.image} 
    name={plant.name} 
    id={plant.id} 
    price={plant.price} />
  })
  return (
    <ul className="cards">{cardOfPlant}</ul>
  );
}

export default PlantList;
