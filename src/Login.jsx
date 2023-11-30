import React, {useState} from "react"

export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

//   const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(username);
//     }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label for="Username">Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)}type="username" placeholder="username" id="username" name="username"/>
                <label for="Password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="********" id="password" name="password"/>
                <button type="submit">Log In</button>
            </form> 
            <form>
                <label for="username">Username</label>
                <input type="username" placeholder="username" id="username" name="username"/>
                <label for="password">Password</label>
                <input type="password" placeholder="********" id="password" name="password"/>
                <button type="submit">Log In</button>
            </form>
            <button onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </>
    )
}