import React from 'react'
import { useState,useRef } from 'react'

export function SearchBar() {
    const [items, setItems] = useState([""]);
    const inputRef = useRef();
    // console.log(items)
    // inputRef.current.value.focus();

    const onSubmit = (e) =>{
        e.preventDefault();
        const value = inputRef.current.value;
        console.log(value);
        // if(value === "")
        inputRef.current.value = "";
        return setItems((prev)=>{
            
            return [...prev,value]
        })
        
    }

  return (
    <>Search:
        {/* <input type="text" placeholder='Search' /> */}
        <form onSubmit={onSubmit}>
            Add Items :<input ref={inputRef} type="text"  />
            <button type='submit'>Submit</button>
        </form>
       <h3>Items :</h3>
       {items.map((item)=>(
        <div>{item}</div>
       ))}
    </>
  )
}

