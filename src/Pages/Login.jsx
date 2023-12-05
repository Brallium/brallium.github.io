// import React, { useState } from "react";
// import axios from "axios";
// import { UserAuth } from "./Config/AuthContext";

// export const Login = (props) => {
//   const [username, setUsername] = useState("");
//   const [pass, setPass] = useState("");
//   const { createUser, signInUser, signOutUser, user } = UserAuth();

//   async function handleGetUser() {
//     const jwt = user.accessToken;
//     const config = {
//       headers: {
//         Authorization: "Bearer " + jwt,
//         "Content-Type": "application/json",
//       },
//     };
//     const userData = await axios.get("http://localhost:3001/getUser", config);
//     console.log(userData.data);
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     createUser(username, pass);
//   }

//   async function handleSignIn(e) {
//     e.preventDefault();
//     signInUser(username, pass);
//   }

//   const handleChangeUser = (event) => {
//     setUsername(event.target.value);
//   };

//   const handleChangePass = (event) => {
//     setPass(event.target.value);
//   };

//   return (
//     <>
//       {/* <form onSubmit={handleSubmit}>
//                 <label for="Username">Username</label>
//                 <input value={username} onChange={(e) => setUsername(e.target.value)}type="username" placeholder="username" id="username" name="username"/>
//                 <label for="Password">Password</label>
//                 <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="********" id="password" name="password"/>
//                 <button type="submit">Log In</button>
//             </form> */}
//             <form>
//                 <label for="username">Username</label>
//                 <input type="username" placeholder="username" id="username" name="username"/>
//                 <label for="password">Password</label>
//                 <input type="password" placeholder="********" id="password" name="password"/>
//                 <button type="submit">Log In</button>
//             </form>
//             <button onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
//         </>
//     )
// }
// export default Login
// //       <form onSubmit={handleSubmit}>
// //         <label for="username">Username</label>
// //         <input
// //           type="username"
// //           placeholder="username"
// //           id="username"
// //           name="username"
// //           onChange={handleChangeUser}
// //         />
// //         <label for="password">Password</label>
// //         <input
// //           type="password"
// //           placeholder="********"
// //           id="password"
// //           name="password"
// //           onChange={handleChangePass}
// //         />
// //         <button type="submit">Log In</button>
// //       </form>

// //       <form onSubmit={handleSignIn}>
// //         <label for="username">Username</label>
// //         <input
// //           type="username"
// //           placeholder="username"
// //           id="username"
// //           name="username"
// //           onChange={handleChangeUser}
// //         />
// //         <label for="password">Password</label>
// //         <input
// //           type="password"
// //           placeholder="********"
// //           id="password"
// //           name="password"
// //           onChange={handleChangePass}
// //         />
// //         <button type="submit">Log In</button>
// //       </form>

// //       <button onClick={() => props.onFormSwitch("register")}>
// //         Don't have an account? Register here.
// //       </button>
// //       <button onClick={handleGetUser}>Get User</button>
// //     </>
// //   );
// // };

import React, { useState } from "react";
import axios from "axios";
import { UserAuth } from "./Config/AuthContext";

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

  return (
    <>
      {/* <form onSubmit={handleSubmit}>
                <label for="Username">Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)}type="username" placeholder="username" id="username" name="username"/>
                <label for="Password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="********" id="password" name="password"/>
                <button type="submit">Log In</button>
            </form> */}
      <form onSubmit={handleSubmit}>
        <label for="username">Username</label>
        <input
          type="username"
          placeholder="username"
          id="username"
          name="username"
          onChange={handleChangeUser}
        />
        <label for="password">Password</label>
        <input
          type="password"
          placeholder="********"
          id="password"
          name="password"
          onChange={handleChangePass}
        />
        <button type="submit">Log In</button>
      </form>

      <form onSubmit={handleSignIn}>
        <label for="username">Username</label>
        <input
          type="username"
          placeholder="username"
          id="username"
          name="username"
          onChange={handleChangeUser}
        />
        <label for="password">Password</label>
        <input
          type="password"
          placeholder="********"
          id="password"
          name="password"
          onChange={handleChangePass}
        />
        <button type="submit">Log In</button>
      </form>

      <button onClick={() => props.onFormSwitch("register")}>
        Don't have an account? Register here.
      </button>
      <button onClick={handleGetUser}>Get User</button>
    </>
  );
};
