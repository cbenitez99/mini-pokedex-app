import React from 'react'

const PokemonStats = ({pokemonData, errors, handleCaptureClick}) => {

    return (
        <div className="mini-pokemon-form">
            {pokemonData.map((data, index) => {
        return (
            <>
            <div className="container">
                <div className="divTable">
                <img className="sprite" src={data.sprites["front_default"]} alt="poke-sprite"/>
                <div className="divTableBody" key={index}>
                <p style={{color: "red"}}>{errors}</p> 
                    <div className="divTableRow">
                        <div className="divTableCell">ID</div>
                        <div className="divTableCell">{data.id}</div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell">Name</div>
                        <div className="divTableCell">{data.name.toUpperCase()}</div>
                    </div>

                    <div className="divTableRow">
                        <div className="divTableCell">Type</div>
                        <div className="divTableCell">{data.types.map((type)=>type.type.name.toUpperCase()).join(" / ")}</div>
                    </div>

                    <div className="divTableRow">
                        <div className="divTableCell">HP</div>
                        <div className="divTableCell">❤️{data.stats[0].base_stat}</div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell">Height</div>
                        <div className="divTableCell">
                            {" "}
                            {Math.round(data.height * 3.9)}"
                        </div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell">Weight</div>
                        <div className="divTableCell">
                            {" "}
                            {Math.round(data.weight / 4.3)} LBS
                        </div>
                    </div>
            
                    </div>
                </div>
            </div><br/>
            <button className="button-82-pushable" onClick={handleCaptureClick}>
                <span className="button-82-shadow"></span>
                <span className="button-82-edge"></span>
                <span className="button-82-front text">Capture</span>
            </button>
        </>
        );
        })}
        </div>
    );
}
export default PokemonStats; 

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const PokemonStats = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, setUser] = useState()

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("user");
//     if (loggedInUser) {
//       const foundUser = JSON.parse(loggedInUser);
//       setUser(foundUser);
//     }
//   }, []);

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const user = { username, password };
//     // send the username and password to the server
//     const response = await axios.post(
//       "http://blogservice.herokuapp.com/api/login",
//       user
//     );
//     // set the state of the user
//     setUser(response.data)
//     // store the user in localStorage
//     localStorage.setItem('user', response.data)
//     console.log(response.data)
//   };

// // if there's a user show the message below
//   if (user) {
//     return <div>{user.name} is loggged in</div>;
//   }

//   // if there's no user, show the login form
//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="username">Username: </label>
//       <input
//         type="text"
//         value={username}
//         placeholder="enter a username"
//         onChange={({ target }) => setUsername(target.value)}
//       />
//       <div>
//         <label htmlFor="password">password: </label>
//         <input
//           type="password"
//           value={password}
//           placeholder="enter a password"
//           onChange={({ target }) => setPassword(target.value)}
//         />
//       </div>
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default PokemonStats;