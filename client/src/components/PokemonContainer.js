import React, {useEffect, useState} from 'react';
import PokemonCard from './PokemonCard';

export default function PokemonContainer() {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        fetch("/pokemons")
        .then(resp => resp.json())
        .then((data)=>{
            setPokemons(data)
        })
    }, [])

    const mappedPokemon = pokemons.map((pokemon) => 
        <div key={pokemon.id}>
            <PokemonCard pokemonData={pokemon}/>
        </div>
    )
  return (
    <div>
        {mappedPokemon}
    </div>
    )
}
