import React, { useState } from 'react';

export function AddItems() {
   
    const [data,setData] = useState("");
     const [items,setItems] = useState([]);

    const onSubmit = (e) =>{
        e.preventDefault();
        // console.log(data)

      //1. setItems([...items, data.trim()]);

      // 2
      let tdata = data.trim()
      if (tdata === ""  ){
        alert("there is some space");
       
      }else{
         setItems([...items, tdata]);
      }
      
     //3 if(data === ""){
        //     console.log("first");
        //     return 
        // }else{
        //      setItems([...items, data.trim()]);
        // }
        
        
        setData("")
        
        
        
    }
    // console.log(items)
  return (
    <>
     <form onSubmit={onSubmit}>
        Add Items :<input value={data}  onChange={(e)=>setData(e.target.value)} type="text" />
        <button type="submit">Submit</button>
      </form>
      <h3>Items :</h3>
      {items?.map((item) => (
        <div>{item}</div>
      ))}
    </>
  );
}

