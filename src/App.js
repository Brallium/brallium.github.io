import React, {useState} from "react"
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import { Login } from "./Login";
import {Register} from "./Register"

function App() {
  const [currentForm, setCurrentForm] = useState('login')
  const toggleForm = (formName) =>
  {
    setCurrentForm(formName);
  }

  return (
  <div>
    <Navbar/>
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
      
    </div>
  </div>
  );
}

export default App;
