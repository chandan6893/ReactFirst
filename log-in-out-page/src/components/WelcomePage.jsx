import React from 'react';


export function WelcomePage({ setLogin, id }) {


  const handleLogout = () => {
    
    setLogin(false);
    localStorage.removeItem("user");

    // {localStorage.removeItem("user")? setLogin(false) : setLogin(true)}
    
    
    
  };


    
  return (
    <div className="welcomePage">
      <h1>Welcome:{id}</h1>
      <button className="logout" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

