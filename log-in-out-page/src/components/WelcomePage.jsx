import React from 'react';
// import { useState } from 'react';

export function WelcomePage({ setLogin, id }) {
//   const [wcom, setWcom] = useState();

  const handleLogout = () => {
    setLogin(false);
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

