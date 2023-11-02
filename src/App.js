import React, {useState} from "react"
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import { Login } from "./Login";
import {Register} from "./Register"

function App() {
  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
      <Navbar/>
    </div>
  );
}

export default App;
