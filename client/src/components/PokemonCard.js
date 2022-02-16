import React, {useState, useEffect} from 'react'

const PokemonCard = () => {
  const [userPokemon, setUserPokemon] = useState([]);
  useEffect(() => {
    fetch(`/pokemons`)
    .then((resp) => (resp.json()))
    .then(data => setUserPokemon(data))
  }, [])

  return (
    <div>
        {userPokemon.map((pokemon) => (
            <div key={pokemon.id}>
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
                  alert(`Bye bye ${pokemon.name}! `)
                })
              }}>Release</button>
            </div>
        ))}
    </div>
  );
}

export default PokemonCard;