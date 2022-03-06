import React from 'react'
// import { useNavigate } from 'react-router-dom';
import PokemonInfo from './PokemonInfo';

const PokemonCard = ({user}) => {
  // let navigate = useNavigate();
  return (
    <div className='pokemon-container'>
        {/* {userPokemon.map((pokemon) => (
          <div className='pokemon-card' key={pokemon.id}>
            <h5 className='pokemon-name'>{pokemon.name} ◓</h5>
            <img className="party-sprites" src={pokemon.image} alt={pokemon.name}/>
            <button className='release-button' onClick={() => handleDelete(pokemon.id)}>Release</button>
            <button className='stats-button' element={<PokemonInfo user={user}/>} >See Moves</button>
          </div>
        ))} */}
      {/* /onClick={() => navigate(`/pokemons/${pokemon.id}/info`)} */}

    </div>
  );
}

export default PokemonCard;