import React from 'react';

export default function TrainerCard({user, caughtPokemon}) {
    return (
        <div>
            <h5>{user.username}'s Party: </h5>
            LIST ASSOCIATED TRAINER POKEMON
            {console.log(caughtPokemon)}
            <br/>
        </div>
    )
}
