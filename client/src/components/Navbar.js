import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Navbar({user}) {
  let navigate = useNavigate()
  return ( //conditional !!user.id prop
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo right">Home</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><a href="/login">Log-In</a></li>
            <li><a href="/delete" onClick={(e) => {
                e.preventDefault()
                fetch('/logout', {
                  method: "DELETE",
                  headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                  }
                  }).then(resp => {
                    navigate("/")
                  })
            }}>Logout</a></li>
            <li><a href="/signup">Sign-Up</a></li>
            <li><a href="/pokemons">Your Pokemon</a></li>
          </ul>
        </div>
      </nav>
    </div> 
  );
}