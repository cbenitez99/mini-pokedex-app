import React from 'react';
import PokemonCard from './PokemonCard';

const TrainerProfile = ({user}) => {
    if (!!user.id) {
        return (
            <div className='trainer-profile'>
                <h5>{user.username}'s Party: </h5>
                <hr/>
                <ul>
                <li>LIST ASSOCIATED POKEMON</li>
                <PokemonCard/>
                </ul>
            </div>
        );
    } else {
        return (
            <div>
                <p>Please Login First</p>
            </div>
        );
    }
    
}

export default TrainerProfile;

