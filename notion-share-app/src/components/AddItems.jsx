import React,{ useState } from 'react';
import Data from './Data';

export function AddItems() {

    const [people,setPeople] = useState(Data);
    const [items, setItems] = useState([]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        let peop = people.trim();
        if(peop===""){
            console.log("some space")
        }else{
            setItems([...items,peop]);
        }
        setPeople("")
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add emails or people" value={people} onChange={(e)=>setPeople(e.target.value)}  />
        <button type="submit">Invite</button>
      </form>

      {/* <h3>Items :</h3> */}
      {items?.map((item) => (
        <div>{item}</div>
      ))}
    </>
  );
}


