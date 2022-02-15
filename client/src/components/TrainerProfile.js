import React from 'react';
import PokemonCard from './PokemonCard';

const TrainerProfile = ({user, caughtPokemon}) => {
    
    return (
        <div className='trainer-profile'>
            <h5>{user.username}'s Party: </h5>
            <hr/>
            <ul>
                <li>LIST ASSOCIATED POKEMON</li>
                {console.log(caughtPokemon)}     
                <PokemonCard caughtPokemon={caughtPokemon}/>
            </ul>
        </div>
    );
}

export default TrainerProfile;
