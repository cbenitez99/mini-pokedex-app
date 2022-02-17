import React from 'react'

const PokemonCard = ({userPokemon}) => {
  return (
    <div id='pokemon-card'>
        {userPokemon.map((pokemon) => (
          <div key={pokemon.id}>
            <h5>Name: {pokemon.name}</h5>
            <h5>Type: {pokemon.types}</h5>
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
            <img src={pokemon.url} alt="pokemon-img"/>
          </div>
        ))}
    </div>
  );
}

export default PokemonCard;