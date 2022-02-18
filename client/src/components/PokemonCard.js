import React from 'react'
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({user, userPokemon}) => {
  let navigate = useNavigate();

  return (
    <div className='pokemon-container'>
        {userPokemon.map((pokemon) => (
          <div className='pokemon-card' key={pokemon.id}>
            <h5>Name: {pokemon.name}</h5>
            <h5>Type: {pokemon.types}</h5>
            
            <img src={pokemon.url} alt="pokemon-img"/>
            <button className='release-bttn' onClick={(e) => {
            e.preventDefault()
            fetch(`/pokemons/${pokemon.id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json"
            }
            }).then(resp => {
              if(resp.ok){
                alert(`Bye-bye ${pokemon.name}! `)
                navigate("/find-pokemon")
              } else {
                alert(`${pokemon.name} will follow you forever!`)
              }
           
            })
            }}>Release</button>
          </div>
        ))}
    </div>
  );
}

export default PokemonCard;