import React, {useState} from "react";

export const Register = (props) => {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

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

        <form>
            <label for="name">Full Name</label>
            <input type="name" name="name" id="name" placeholder="Full Name"/>
            <label for="username">Username</label>
            <input type="username" name="username" id="username" placeholder="Username"/>
            <label for="Email">Email</label>
            <input type="email" placeholder="email@gmail.com" id="email" name="email"/>
            <label for="Password">Password</label>
            <input type="password" placeholder="********" id="password" name="password"/>                
            <button type="submit">Log In</button>        
        </form>
        <button onClick={()=>props.onFormSwitch('login')}>Already have an accound? Login here.</button>
        </>
    )
}