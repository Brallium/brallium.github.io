import React from 'react'
import { useState } from 'react';

// Gotta check on these guys as well --> should I use this in this file or the app.js file?

export const Register = (props) => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [pass, setPass] = useState('');
    const handleSubmit = (e) => 
    {
        e.preventDefault();
        console.log(email);
    }
}

const Register_pop = props => {
    return (
        <div className="popup-box">
            <div className="box">
                <button classname="signup-close" onClick={props.handleClose}>x</button>
            
                <form> 
                    <label for="fname">First Name</label>
                    <input value={fname} onChange={(e) => setFname(e.target.value)}type="fname" name="fname" id="fname" placeholder="First Name"/>
                    <label for="lname">Last Name</label>
                    <input value={lname} onChange={(e) => setLname(e.target.value)}type="lname" name="lname" id="lname" placeholder="Last Name"/>
                    <label for="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="email@gmail.com" id="email" name="email"/>
                    <label for="phone">Phone</label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)}type="phone" placeholder="(000)-000-0000" id="phone" name="phone"/>
                    <label for="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="********" id="password" name="password"/>            
                    <button type="submit"> CREATE ACCOUNT </button>
                </form> 

            </div>
        </div>    
        
                )}

                export default Register_pop;