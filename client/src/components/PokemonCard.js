import React from 'react'

const PokemonCard = ({pokemonName, pokemonData}) => {
  return (
    <div>
      {pokemonData.map((pokemon) =>
        <div key={pokemon.id}>
          {pokemon.name}
        </div>)}
    </div>
  )
}

export default PokemonCard;