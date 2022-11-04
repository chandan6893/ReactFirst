import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// https://codesandbox.io/s/timer-practiece-gx3ux

export function Swatch() {
   const [count,setCount] = useState(0);
   const [time,setTime] = useState(count)

    useEffect(()=>{
     setCount(()=>{
      setTime((prev)=>prev + 1)
     })  

   
    
    },[])

return (
    <>
      <h1>
        COUNT : {time}
      </h1>
  
    </>
  );
}

