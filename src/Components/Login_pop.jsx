import React from 'react'
import { useState } from 'react';

// Gotta check on these guys as well --> should I use this in this file or the app.js file?
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState(''); 
    const handleSubmit = (e) => {
       e.preventDefault();
       console.log(email);
}
}


const Login_pop = props => {
    return (
        <div className="popup-box">
            <div className="box">
                <button classname="signup-close" onClick={props.handleClose}>x</button>
                {props.content}
                <button onClick={() => props.onFormSwitch('register')}> CREATE AN ACCOUNT </button>
            </div>
        </div>
    )
}

export default Login_pop;