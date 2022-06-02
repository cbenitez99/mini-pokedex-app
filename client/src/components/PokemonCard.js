import React from 'react'
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({handleDelete, userPokemon}) => {
  let navigate = useNavigate();

  return (
    <div className='pokemon-container'>
      {userPokemon.map((pokemon) => (
        <div className='pokemon-card' key={pokemon.id}>
          <h5 className='pokemon-name'>{pokemon.name} ◓</h5>
          <img className="party-sprites" src={pokemon.image} alt={pokemon.name}/>
          <button className='release-button' onClick={() => handleDelete(pokemon.id)}>Release</button>
          <button className='stats-button' onClick={() => navigate(`/pokemons/${pokemon.id}/info`)}>See Moves</button>
        </div>
      ))}
    </div>
  );
}

export default PokemonCard;
