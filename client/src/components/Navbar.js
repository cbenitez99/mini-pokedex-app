import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


export default function Navbar({user, setUser}) {
  let navigate = useNavigate()
  return ( 
    <div>
     <nav>
        <div className="nav-wrapper">
          <NavLink to="/" className="brand-logo right">Home</NavLink>
          {/* <NavLink to={`/users/${user.id}`} className="left hide-on-med-and-down">Profile</NavLink> */}
          <ul id="nav-mobile" className="left hide-on-med-and-down">
          {!!user.id ? 
            <div className="nav-wrapper">
            <li><NavLink to={`/users/${user.id}`}>Trainer Profile</NavLink></li>
            <li><NavLink to="/pokemons/new">Find Pokemon</NavLink></li>

             <li><a href="/" onClick={(e) => {
                // e.preventDefault()
                fetch('/logout', {
                  method: "DELETE",
                  headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                  }
                }).then(resp => {
                  setUser({})
                  navigate("/")
                })
            }}>Logout</a></li>

            </div>
            :
            <div>
              <li><NavLink to="/signup" >Signup</NavLink></li>
              <li><NavLink to="/login" >Login</NavLink></li>
          </div>
          }
          </ul>
        </div>
      </nav>
  </div> 
  );
}

 

  // {!user ?
  //   <div className="nav-wrapper">
  //     {/* <a href="/" className="brand-logo right">Home</a> */}
  //     <li><NavLink to="/" className="brand-logo right">Home</NavLink></li>
  //     <ul id="nav-mobile" className="left hide-on-med-and-down">
  //     <li>
  //       <a href="/delete" onClick={(e) => {
  //         e.preventDefault()
  //         fetch('/logout', {
  //           method: "DELETE",
  //           headers: {
  //             "Accept": "application/json",
  //             "Content-Type": "application/json"
  //           }
  //           }).then(resp => {
  //             navigate("/")
  //           })
  //       }}>Logout
  //       </a>
  //     </li>
  //     <li><NavLink to="/pokemons">Your Pokemon</NavLink></li>
  //     </ul>
  //   </div>
  //   :
  //   <div>
  //       <li><NavLink to="/signup" >Signup</NavLink></li>
  //       <li><NavLink to="/login">Log-In</NavLink></li>
  //   </div>
  // }