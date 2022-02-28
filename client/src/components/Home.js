import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({user}) => {  
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/users/${user.id}`)
  }

  if (!!user.id) {
    return (
      <div className='home-page'>
        <h3>Welcome to the Mini Pokedex, {user.username}!</h3>
        <p>This program allows a trainer to search for and catch their favorite Pokemon! To get started, head over to your</p><div className="direct-profile" onClick={handleClick} style={{color: "red", fontSize: 20}}>Trainer Profile!</div>
      </div>
    );
  } else {
    return (
      <div className='home-page-logout'>
        <h1>Welcome to the Mini Pokedex!</h1>
        <h3>Please Log-In or Sign-Up First</h3>
      </div>
    );
  }
}

export default Home;
