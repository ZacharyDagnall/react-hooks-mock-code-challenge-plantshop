import React, {useState} from "react";

function PlantCard({name, image, price, id, handleDelete}) {
  const [unSold, setSold] = useState(true)
  const [isForm, setIsForm] = useState(false)
  const [diPrice, setDiPrice] = useState(price)

  function handleChange(e){
    setDiPrice(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch(`http://localhost:6001/plants/${id}`,
    {method: "PATCH",
    headers: {"Content-Type": "application/json",
    accept: "application/json"},
    body: JSON.stringify({price: parseFloat(diPrice)})
  })
    setIsForm(!isForm)
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      {isForm ? (
        <p>
        <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="number" value={diPrice}></input>
        </form>
        </p>
      ) : (<p onClick={(e)=>setIsForm(!isForm)}>Price: {diPrice}</p>)}
      {unSold ? (
        <button className="primary" onClick={(e)=>setSold(!unSold)}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
      <button onClick= {(e) => handleDelete(id)} className="primary">🔥</button>
    </li>
  );
}

export default PlantCard;
