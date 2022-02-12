import React from 'react';
// import PokemonCard from './PokemonCard';
// caughtPokemon prop
const TrainerProfile = ({user}) => {
    // let mappedData = caughtPokemon.map((pokemon) => (
    // <div key={pokemon.url}>
    //     <PokemonCard pokemonData={pokemonData} pokemonName={pokemon.name}/>
    // </div>
    // ));
    return (
        <div className='trainer-profile'>
            <h5>{user.username}'s Party: </h5>
            LIST ASSOCIATED POKEMON
            <hr/>
            {/* {mappedData} */}
            
        </div>
    )
}

export default TrainerProfile;
