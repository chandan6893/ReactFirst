import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export function Swatch() {
    const [microSec,setMicroSec] = useState(0);
    const [sec,setSec] = useState(0);
    const [mint,setMint]= useState(0);
    const [hr,setHr] = useState();

    useEffect(()=>{
        setMicroSec((prev)=>prev + 1);
        setSec((prev)=>prev + 1);
        setMint((prev)=>prev + 1);
        setHr((prev)=>prev + 1);
    },[])


    const handleStart = () =>{

    }

    
  return (
    <>
      <h1>
        {mint}: {sec}: {microSec}
      </h1>
      <button onClick={handleStart} >Start</button>
      <button>Reset</button>
    </>
  );
}

