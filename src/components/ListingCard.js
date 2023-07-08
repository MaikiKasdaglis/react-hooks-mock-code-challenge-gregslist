import React, {useState} from "react";

function ListingCard({item, removeItem}) {

  const {id, description,image, location } = item 
  const [classTf, setClassTf] = useState(false)

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {classTf ? (
          <button onClick={e => setClassTf(!classTf)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={e => setClassTf(!classTf)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={e => removeItem(id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
