import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = ({user, setUser}) => {
  let navigate = useNavigate()
  return ( 
      <div className='navbar-master'>
        {!!user.id ? 
          <div>
            <NavLink className="navlinks" to="/">Home</NavLink>
            <NavLink className="navlinks" to={`/users/${user.id}`}>Trainer Profile</NavLink>
            <NavLink className="navlinks" to="/find-pokemon">Pokédex</NavLink>    
            <NavLink className="navlinks" to="/" style={{color: "black"}} onClick={(e) => {
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
          </div>
          :
          <div>
            <NavLink className="navlinks" to="/">Home</NavLink>
            <NavLink className="navlinks" to="/signup">Signup</NavLink>
            <NavLink className="navlinks" to="/login">Login</NavLink>
          </div>
        }
      </div>
  );
};

export default Navbar;