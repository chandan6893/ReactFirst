
import './components/styles.css';
import { LoginPage } from './components/LoginPage';
import { WelcomePage } from './components/WelcomePage';
import { useState } from 'react';

function App() {
const [logIn,setLogin] = useState(false);
const [id, setId] = useState("");

  return (
    <div className="App">
      {logIn ? <WelcomePage setLogin={setLogin} id={id} /> : <LoginPage setLogin={setLogin} setId={setId} id={id}   />}
      
    </div>
  );
}

export default App;
