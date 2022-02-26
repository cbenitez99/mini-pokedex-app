import React from 'react'
import { useNavigate } from 'react-router-dom';
import PokemonInfo from './PokemonInfo';

const PokemonCard = ({userPokemon, handleDelete, user}) => {
  let navigate = useNavigate();
  return (
    <div className='pokemon-container'>
        {userPokemon.map((pokemon) => (
          <div className='pokemon-card' key={pokemon.id}>
            <h5 className='pokemon-name'>{pokemon.name}</h5>
            <img src={pokemon.url} alt={pokemon.name}/>
            <button className='release-button' onClick={() => handleDelete(pokemon.id)}>Release</button>
            <button className='stats-button' element={<PokemonInfo user={user}/>} onClick={() => navigate(`/pokemons/${pokemon.id}/stats`)}>More Info</button>
          </div>
        ))}
    </div>
  );
}

export default PokemonCard;