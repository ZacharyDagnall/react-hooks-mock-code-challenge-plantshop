import React, {useState} from "react";

function PlantCard({name, image, price, id}) {
  const [unSold, setSold] = useState(true)
  
  
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {unSold ? (
        <button className="primary" onClick={(e)=>setSold(!unSold)}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
