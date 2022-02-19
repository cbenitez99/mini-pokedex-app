import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = ({user, setUser}) => {
  let navigate = useNavigate()
  return ( 
      <div>
        {!!user.id ? 
          <div className='nav-bar'>
            <NavLink className="navlinks" to="/">Home</NavLink>
            <NavLink className="navlinks" to={`/users/${user.id}`}>Trainer Profile</NavLink>
            <NavLink className="navlinks" to="/find-pokemon">Find Pokemon</NavLink>    
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
          </div>
          :
          <div className='nav-bar'>
            <NavLink className="navlinks" to="/">Home</NavLink>
            <NavLink className="navlinks" to="/signup">Signup</NavLink>
            <NavLink className="navlinks" to="/login">Login</NavLink>
          </div>
        }
      </div>
  );
}

export default Navbar;