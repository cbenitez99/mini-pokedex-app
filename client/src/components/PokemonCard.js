import React from 'react'

const PokemonCard = ({userPokemon}) => {
  return (
    <div className='pokemon-container'>
        {userPokemon.map((pokemon) => (
          <div className='pokemon-card' key={pokemon.id}>
            <h5>Name: {pokemon.name}</h5>
            <h5>Type: {pokemon.types}</h5>
            
            <img src={pokemon.url} alt="pokemon-img"/>
            <button onClick={(e) => {
            e.preventDefault()
            fetch(`/pokemons/${pokemon.id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json"
            }
            }).then(resp => {
            alert(`Bye-bye ${pokemon.name}! `)
            })
            }}>Release</button>
          </div>
        ))}
    </div>
  );
}

export default PokemonCard;