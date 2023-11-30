import React, {useState} from "react"
import './styles/App.css';
import Navbar from './Components/NavBar/Navbar';
import {Products} from './Components/products';
import contents from './Components/contents';
//import {Login} from "./Login";
//import {Register} from "./Register";
import {Feedback} from "./Components/feedback";
import Login_pop from "./Components/Login_pop"
import Register_pop from "./Components/Register_pop"

function App() {
  
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const [currentForm, setCurrentForm] = useState('login')
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }


  return (
    <div>
      <Navbar />
      <div className='App'>
        {contents.map(contents => (
          <Products
            key={contents.id}
            image={contents.image}
            name={contents.name}
            price={contents.price}
          />
        ))}

        <button onClick={togglePopup}>Sign In</button>

        {isOpen && <Login_pop
            handleClose={togglePopup}
            content={<div> 
              <h2> Great to see you again! </h2>
              {/*<img src= "https://as1.ftcdn.net/v2/jpg/04/28/51/02/1000_F_428510221_f1eVs6BjxpBTvhmyUa3C4k8ExuRwHRum.jpg" alt=""></img>*/}
              <p> DON'T HAVE AN ACCOUNT?</p>
              <h2> Join the Brallium community in our mission.</h2>

              <form>
                <label for="email">Email</label>
                <input type="email" placeholder="ie. Bellabruin@gmail.com" id="email" name="email"/>
                <label for="password">Password</label>
                <input type="password" placeholder="Enter your password here" id="password" name="password"/>
                <button type="submit">Log In</button> 
             </form>
            </div>}
        
        { ...currentForm === "login" ? <Login_pop onFormSwitch={toggleForm} /> : <Register_pop onFormSwitch={toggleForm} />}

          
          />
        }
       {/*} <Iconbutton icon={FaUserCircle}></Iconbutton>
        // have to find a way to connect the icon button to the popup window*/}

      </div>




      {/*<div className="App">
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
        }

      </div>*/}
    </div>
  );
}

export default App;
