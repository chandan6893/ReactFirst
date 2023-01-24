import { useSelector } from 'react-redux';
import './App.css';
// import Counter from './components/Counter';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import DashBoard from './components/DashBoard';
function App() {
  const loggedInUser = useSelector((state)=>{
    console.log(state,state.loggedInUser)
    return state.loggedInUser ;
  })
  console.log(loggedInUser);
  return (
    
    <>
    { loggedInUser ? <DashBoard /> : <><Home/> <LoginForm/> </>}
    </>
   

  );
}

export default App;
