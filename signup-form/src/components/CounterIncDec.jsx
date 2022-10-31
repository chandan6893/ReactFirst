import React, { useState } from 'react';
import { useEffect } from 'react';
export function CounterIncDec() {
    const [count,setCount] = useState(0);
    const [button, setButton] = useState("increment");
    useEffect(()=>{
        if(count === 0){
            setButton("increment");
        };
        
        if(count>=10){
            setButton("decrement");
        }

        return (()=>{
            setCount(0);
            setButton("increment");
        })

    },[count]);
    const handleClick = () =>{
    button==="increment"? setCount((prev)=>prev + 1) : setCount((prev)=>prev - 1) ;
    }
  return (
    <>
      <div> COUNT : {count} </div>
      <button onClick={handleClick}>{button}</button>
    </>
  );
}

