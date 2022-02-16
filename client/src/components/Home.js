import React from 'react';

const Home = ({user}) => {
  if (!!user.id) {
    return (
      <div>
        <h3>Welcome to the Mini Pokedex, {user.username}!</h3>
        <p>This program allows a trainer to search for and catch their favorite Pokemon!</p>
      </div>
    );
  } else {
    return (
      <div>
        <h4>Please Log-In or Sign-Up First</h4>
      </div>
    );
  }
}

export default Home;
