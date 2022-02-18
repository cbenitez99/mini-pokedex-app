import React from 'react'

const PokemonCard = ({userPokemon, handleDelete}) => {
  return (
    <div className='pokemon-container'>
        {userPokemon.map((pokemon) => (
          <div className='pokemon-card' key={pokemon.id}>
            <h5>Name: {pokemon.name}</h5>
            <h5>Type: {pokemon.types}</h5>
            
            <img src={pokemon.url} alt="pokemon-img"/>
            <button className='release-bttn' onClick={() => handleDelete(pokemon.id)}>Release</button>
          </div>
        ))}
    </div>
  );
}

export default PokemonCard;