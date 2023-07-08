import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({itemList, removeItem}) {
  return (
    <main>
      <ul className="cards">
       {itemList.map((item) => <ListingCard key={item.id} removeItem={removeItem} item={item}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
