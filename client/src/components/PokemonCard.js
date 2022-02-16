import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const PokemonCard = ({user}) => {
  const [userPokemon, setUserPokemon] = useState([]);
  let {id} = useParams();
  useEffect(() => {
    fetch(`/pokemons`)
    .then((resp) => (resp.json()))
    .then(data => setUserPokemon(data))
  }, [])
  
  // const handleClick = (e) => {
  //   e.preventDefault()
  //   fetch(`/pokemons`, {
  //     method: "DELETE",
  //     headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json"
  //     }
  //   }).then(resp => {
  //     console.log(resp)
  //   })
  // }

  return (
    <div>
        {userPokemon.map((pokemon) => (
            <div key={pokemon.id}>
              <h5>Name: {pokemon.name}</h5>
              <h5>Type: {pokemon.types}</h5>
              <img src={pokemon.url} alt="pokemon-img"/>
              <button onClick={(e) => {
                e.preventDefault()
                fetch(`/pokemons/${id}`, {
                  method: "DELETE",
                  headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                  }
                }).then(resp => {
                  console.log(resp)
                })
              }}>Release</button>
            </div>
        ))}
    </div>
  );
}

export default PokemonCard;