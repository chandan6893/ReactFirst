import React from 'react';
import userData from "./data";
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function LoginForm() {
    const [loginData,setLoginData] = useState({});

    const dispatch = useDispatch();

    const handleLogin = (e)=>{
        e.preventDefault();

        let result = userData.filter((emailNpas)=>{
            return emailNpas.email === loginData.email && emailNpas.password === loginData.password ;
        });
        // result = [{email:"krc6893@gmail.com",password:"pass"}];
        // result[0] = { email: "krc6893@gmail.com", password: "pass" };

        if(result[0]){
            let action = {
                type : "SET__LOGIN__DATA",
                payload: {
                    ...result[0]
                }
            }
            dispatch(action);
        }else{
            alert("FAILED TO LOGIN")
        }
    }

  return (<>   
   <h1>LoginForm</h1>
   <form onSubmit={handleLogin} >
    <input type="text" placeholder='Email' onChange={(e)=>setLoginData({...loginData, email : e.target.value})} /> <br />
    <input type="password" placeholder='Password' onChange={(e)=> setLoginData({...loginData, password : e.target.value })} /> <br />
    <button >Submit</button>
   </form>
  </>

  )
}

export default LoginForm