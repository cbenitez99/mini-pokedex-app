import React from 'react'

const PokemonCard = ({userPokemon, handleDelete, user}) => {
  return (
    <div className='pokemon-container'>
        {userPokemon.map((pokemon) => (
          <div className='pokemon-card' key={pokemon.id}>
            <h5>{pokemon.name}</h5>
            <img src={pokemon.url} alt={pokemon.name}/>
            <button className='release-bttn' onClick={() => handleDelete(pokemon.id)}>Release</button>
            <button >see stats!</button>

          </div>
        ))}
    </div>
  );
}

export default PokemonCard;