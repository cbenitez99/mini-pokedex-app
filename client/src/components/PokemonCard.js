import React, {useState, useEffect} from 'react'

const PokemonCard = () => {
  const [userPokemon, setUserPokemon] = useState([]);

  useEffect(() => {
    fetch("/pokemons")
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
            </div>
        ))}
    </div>
  );
}

export default PokemonCard;