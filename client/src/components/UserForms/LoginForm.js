// import React, {useState} from 'react'
// import { useNavigate } from 'react-router-dom';

// const LoginForm = ({user, setUser}) => {
    // useEffect(() => {
    //     const loggedInUser = localStorage.getItem("user");
    //     if (loggedInUser) {
    //       const foundUser = JSON.stringify(loggedInUser);
    //       setUser(foundUser);
    //     }
    //   }, []);
//     const [formData, setFormData] = useState({
//         username: "",
//         password: ""
//     })

//     const [errors, setErrors] = useState([])
//     let navigate = useNavigate()

//     const handleChange = (e) => {
//         setFormData(prev => {
//             return { ...prev, [e.target.name]: e.target.value }
//         });
//     };   
 
//     const handleSubmit = (e) => {
    const user = { username, password };
    // send the username and password to the server
    const response = await axios.post(
      "/login",
      user
    );
    // set the state of the user
    setUser(response.data)
    // store the user in localStorage
    localStorage.setItem('user', response.data)
    console.log(response.data)
//         e.preventDefault()
//         let params = {
//           ...formData  
//         }
//         fetch("/login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(params)
//         })
//         .then(resp => {
//             if(resp.ok){
//                 resp.json()
//                 .then((json) => {
//                     setUser(json)
//                     navigate(`/`)
//                 })
//             } else {
//                 resp.json()
//                 .then((json) => {
//                     setErrors(json.errors)
//                 })
//             }
//         })
//     }

//     const handleWindow = () => {
//         window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
       
//     }; 
    
//     return (
//         <div className='login-page'>
//             <div className="login-container">
//                 <h1>Login</h1>
//                 <form onSubmit={handleSubmit} className="login-form">
//                     <label htmlFor="username">Username:</label>
//                     <input onChange={handleChange} type="text" name="username" value={formData.username}/>
//                     <label htmlFor="password">Password:</label>
//                     <input onChange={handleChange} type="password" name="password" value={formData.password}/>
//                     <br/>
//                     <button type="submit" className='login-button'>Log in</button>
//                     <p style={{color: "black"}}>{errors}</p>
//                 </form>
//                 <p>Dont have an account? <a href='/signup'>Sign-Up</a></p>
//                 <p className='forgot-pass' onClick={handleWindow}><a href='/signup'>Forgot Password?</a></p>
//             </div>
//         </div>
//     )
// };
// export default LoginForm;

import React, { useState, useEffect } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState()

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.stringify(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    const user = { username, password };
    // send the username and password to the server
    const response = await axios.post(
      "/login",
      user
    );
    // set the state of the user
    setUser(response.data)
    // store the user in localStorage
    localStorage.setItem('user', response.data)
    console.log(response.data)
  };

// if there's a user show the message below
  if (user) {
    return <div>{user.name} is loggged in</div>;
  }

  // if there's no user, show the login form
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        value={username}
        placeholder="enter a username"
        onChange={({ target }) => setUsername(target.value)}
      />
      <div>
        <label htmlFor="password">password: </label>
        <input
          type="password"
          value={password}
          placeholder="enter a password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;