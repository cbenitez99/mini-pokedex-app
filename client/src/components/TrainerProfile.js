import React from 'react';

const TrainerProfile = ({user, caughtPokemon}) => {
    
    return (
        <div className='trainer-profile'>
            <h5>{user.username}'s Party: </h5>
            <hr/>
            <ul>
                <li>LIST ASSOCIATED POKEMON</li>
                {console.log(caughtPokemon[0])}     
                <p>{caughtPokemon[0]}</p>           
            </ul>
        </div>
    );
}

export default TrainerProfile;
