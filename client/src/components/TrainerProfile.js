import React from 'react';
import PokemonCard from './PokemonCard';

const TrainerProfile = ({user, caughtPokemon}) => {
    let mappedData = caughtPokemon.map((pokemon) => {
    <div key={pokemon.url}>
        <PokemonCard pokemonName={pokemon.name}/>
    </div>
    });
    return (
        <div className='trainer-profile'>
            <h5>{user.username}'s Party: </h5>
            LIST ASSOCIATED POKEMON
            <hr/>
            {mappedData}
        </div>
    )
}

export default TrainerProfile;
