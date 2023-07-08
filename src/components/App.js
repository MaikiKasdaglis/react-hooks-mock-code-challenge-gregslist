import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
const [itemList, setItemList] = useState([])
  useEffect(() => {
    fetch(`http://localhost:6001/listings`)
    .then(r => r.json())
    .then(d => setItemList(d))
  },[])


  function removeItem(id){
    console.log(`from listCart`, id)
    const updated = itemList.filter((item) => item.id !== id)
    setItemList(updated)

    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  function filterList (search) {
   const newNew = itemList.filter((item) => item.description.includes(search))
   setItemList(newNew)
  }

  
  return (
    <div className="app">
        <Header filterList={filterList}/>
      <ListingsContainer removeItem={removeItem} itemList={itemList} />
    </div>
  );
}

export default App;
