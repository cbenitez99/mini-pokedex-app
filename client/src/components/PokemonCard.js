import React from 'react'

const PokemonCard = ({userPokemon, handleDelete, user}) => {
  return (
    <div className='pokemon-container'>
        {userPokemon.map((pokemon) => (
          <div className='pokemon-card' key={pokemon.id}>
            <h5 className='pokemon-name'>{pokemon.name}</h5>
            <img className='pokemon-img' src={pokemon.url} alt={pokemon.name}/>
            <button className='release-button' onClick={() => handleDelete(pokemon.id)}>Release</button>
            <button className='stats-button'>PokeStats</button>
          </div>
        ))}
    </div>
  );
}

export default PokemonCard;