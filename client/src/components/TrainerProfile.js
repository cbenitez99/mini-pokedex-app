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
                <h3>Please Log-In or Sign-Up First</h3>
            </div>
        );
    }
    
}

export default TrainerProfile;
