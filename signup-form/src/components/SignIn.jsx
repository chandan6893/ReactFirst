import React from 'react';
import { useState } from 'react';

export function SignIn() {

  const [id,setId] = useState("");

  const [password,setPassword] = useState("");

  const [idPwd,setIdPwd] = useState({id:id,password:password});

  const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log(id,password)
    if(id && password){
      setIdPwd({...idPwd,id,password});
    }
   
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" placeholder="Email Id..."  value={id} onChange={(e)=>setId(e.target.value)} />

        <div>
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

