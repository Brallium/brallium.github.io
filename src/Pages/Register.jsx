import React, {useState} from "react";
import axios from "axios";
import '../styles/index.css'
import { UserAuth } from "../config/AuthContext";


export const Register = (props) => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [pass, setPass] = useState('');
    const [username, setUsername] = useState('');
    const [number, setNumber] = useState('');
    const { createUser, signInUser, signOutUser, user } = UserAuth();

    async function handleSubmit(e) {
        e.preventDefault();
        createUser(username, pass);
      }

      const handleChangeUser = (event) => {
        setUsername(event.target.value);
      };
    
      const handleChangePass = (event) => {
        setPass(event.target.value);
      };


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(username);
    // }


    return (
        <>
        {/* <form onSubmit={handleSubmit}> */}
            {/* <label for="name">Full Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)}type="name" name="name" id="name" placeholder="Full Name"/>
            <label for="username">Username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)}type="username" name="username" id="username" placeholder="Username"/>
            <label for="Email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="email@gmail.com" id="email" name="email"/>
            <label for="Password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="********" id="password" name="password"/>            
            <button type="submit">Log In</button>
        </form> */}

        <form onSubmit={handleSubmit}>
            <label for="fname">Full Name</label>
            <input type="fname" name="fname" id="fname" placeholder="First Name"/>
            <label for="lname">Username</label>
            <input type="lname" name="lname" id="lname" placeholder="Last Name"/>
            <label for="username">Email</label>
            <input type="username" placeholder="Bellabruin@gmail.com" id="username" name="username"/>
            <label for="Password">Password</label>
            <input type="password" placeholder="********" id="password" name="password"/> 
            <label for="Confirm Password">Confirm Password</label>
            <input type="Confirm password" placeholder="********" id="Confirm Password" name="Confirm Password"/>               
            <button type="submit">Create Account</button>        
        </form>
        <button onClick={()=>props.onFormSwitch('Login')}>Already have an accound? Login here.</button>
        </>
    )
}
 export default Register