import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = ({user, setUser}) => {
  let navigate = useNavigate()
  return ( 
    <div>
     <nav>
        <div>
          <ul>
          {!!user.id ? 
            <div>
              <NavLink to="/">Home</NavLink>
              {" "}
              <NavLink className="navlinks" to="/" onClick={(e) => {
              e.preventDefault()
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
              } }>Logout</NavLink>
              {" "}
              <NavLink to={`/users/${user.id}`}>Trainer Profile</NavLink>
              {" "}
              <NavLink className="navlinks" to="/find-pokemon">Find Pokemon</NavLink>            
            </div>
            :
            <div className='nav-bar'>
              <NavLink to="/">Home</NavLink>
              {" "}
              <NavLink to="/signup" >Signup</NavLink>
              {" "}
              <NavLink to="/login" >Login</NavLink>
            </div>
          }
          </ul>
        </div>
      </nav>
  </div> 
  );
}

export default Navbar;