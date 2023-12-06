import React, { useState } from "react";
import axios from "axios";
import "../styles/Modal_login.css"
import { UserAuth } from "../config/AuthContext";
import { FaUserCircle } from 'react-icons/fa';
import "../Images/Frame.png"
import "../Images/Rectangle 8.png"
import "../Images/Group 28.png"



export const Login = (props) => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const { createUser, signInUser, signOutUser, user } = UserAuth();

  async function handleGetUser() {
    const jwt = user.accessToken;
    const config = {
      headers: {
        Authorization: "Bearer " + jwt,
        "Content-Type": "application/json",
      },
    };
    const userData = await axios.get("http://localhost:3001/getUser", config);
    console.log(userData.data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    createUser(username, pass);
  }

  async function handleSignIn(e) {
    e.preventDefault();
    signInUser(username, pass);
  }

  const handleChangeUser = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePass = (event) => {
    setPass(event.target.value);
  };

}



export default function Modal({modal, setModal}) {


  const toggleModal = () => {
    setModal(!modal)
  }
  const [register, setRegister] = useState(false);
  const toggleRegister = () => {
    setRegister(!register)
    setModal(false)
  }
  
  return(

  <>
  {/* <button id="submit"
  onClick={toggleModal}
  >
    Open
  </button> */}
  {modal && (
  <div className="modal">
    <div className="overlay"></div>
    <div className="modal-content">
    <img className="design" src={require("../Images/Group 28.png")}  
      bottom='0'
          />
      <button 
          className="closeModal"
          onClick={toggleModal}>
            X
      </button>        
      <div style={{
        width: '450px',
        height: '400px',
        backgroundSize: 'cover',
        borderRadius: '10px',
        backgroundImage: 'url(../Images/Frame.png)',
        zIndex: '-2',
      }}
      className="accountSide">
      
        <img src={require("../Images/Rectangle 8.png")}  
          width='400px'
          height='160px'
          backgroundSize='cover'
          borderRadius='10px'/>
          <h2>DON'T HAVE AN ACCOUNT?</h2>
          <h1>Join the Brallium community in our mission.</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Venenatis risus auctor urna nibh tellus eleifend fringilla scelerisque pellentesque. </p>
  
            <button id="createAccount" onClick={toggleRegister}>CREATE ACCOUNT</button>

         
      </div>
      <div className="Logform">
        <div className="modal_l-heading">Great to see you again!</div><br /><br />
        <form>
           <label for="username">Email</label><br />
           <input type="username" placeholder="Bellabruin@gmail.com" id="username" name="username"/><br />
           <label for="password">Password</label><br />
           <input type="password" placeholder="********" id="password" name="password"/><br />
           
          <div className="checkbox">
            <input type="checkbox" id="rememberpass" name="rememberpass"/>
            <label for="vehicle1"> Remember my account details</label>
          </div>
          </ form> 
          <div className="forgot"><a href="#">Forgot my Password</a></div>
           <br />
           <a href='/'>
           <button id="submit" type="submit">LOGIN</button>
           </a>
      </div>
   </div>

  </div>

  )}

    {register && (
      <div className="modal">
        <div className="overlay"></div>
        <div className="modal-content-r">
          <button 
              className="closeModal"
              onClick={toggleRegister}>
                X
          </button>        
          <div style={{
            width: '450px',
            height: '500px',
            backgroundSize: 'cover',
            borderRadius: '10px',
            backgroundImage: 'url(../Images/Frame.png)',
            zIndex: '-2',
          }}
          className="accountSide">
          
            <img src={require("../Images/Rectangle 8.png")}  
              width='400px'
              height='160px'
              backgroundSize='cover'
              borderRadius='10px'/>
              <h1>As a Brallium member, you help our environment:</h1><br />
              <p>Lorem ipsum dolor sit amet consectetur. Venenatis risus auctor urna nibh tellus eleifend fringilla scelerisque pellentesque. </p>
              <ul>
                  <li>Benefit Number One</li>
                  <li>Benefit Number Two</li>
                  <li>Benefit Number Three</li>
              </ul>
              <a href='/about'>
                <button id="learn" >LEARN MORE</button>
              </a>
          </div>
          <div className="Logform">
            <div className="modal_l-heading">Welcome to Brallium.</div><br /><br />
            <form>

                  <div className="firstName">
                    <label for="fname">First Name</label> <br />
                    <input type="fname" placeholder="First Name" id="fname" name="fname"/><br /><br />
                  </div>
                  <div className="lastName">
                    <label for="lname">Last Name</label><br />
                    <input type="lname" placeholder="Last Name" id="lname" name="lname"/>
                  </div>
                  <div className="user">
                  <label for="username">Email</label>
                  <input type="username" placeholder="Bellabruin@gmail.com" id="username" name="username"/>
                  </div>
                  <div className="number">
                  <label for="number">Phone Number</label><br />
                  <input type="number" placeholder="000-000-0000" id="number" name="number"/>
                  </div>
                  <div className="pass">
                  <label for="password">Password</label>
                  <input type="password" placeholder="********" id="password" name="password"/>
                  </div>

                  <br />
              <div>
                <input type="checkbox" id="news" name="news"/>
                <label for="news"> Subscribe to email newsletter </label><br />
              </div>
              <div>
                <input type="checkbox" id="terms" name="terms"/>
                <label for="terms"> I agree to Brallium's Privacy Policy & Terms of Service</label><br />
              </div>
              </ form> 
              <div className="going"><br />
                <p>Already have an account?</p><a class="link" href="#">Login</a></div>
              <br />

              <a href='/'>
                <button id="createAccounts" >CREATE ACCOUNT</button>
              </a>
          </div>
      </div>

      </div>

      )}





  </>
)
}


