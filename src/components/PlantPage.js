import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchCon, setSearchCon] = useState("")
  
  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(r=>r.json())
    .then(data=>setPlants(data))
  },[])
  
  return (
    <main>
      <NewPlantForm setPlants={setPlants}/>
      <Search setSearchCon={setSearchCon}/>
      <PlantList search={searchCon} plants={plants} />
    </main>
  );
}

export default PlantPage;
