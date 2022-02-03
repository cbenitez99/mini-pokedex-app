import React from 'react';

export default function PokemonCard({pokemonData}) {
  return (
    <div>
        <h4> Name: {pokemonData.name}</h4>
        <p> Type: {pokemonData.types}</p>
        <img alt='Pokemon' src={pokemonData.url}/>
    </div>
  );
}
