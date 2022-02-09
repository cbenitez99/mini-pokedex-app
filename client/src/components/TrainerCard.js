import React from 'react';

export default function TrainerCard({trainerData}) {
    return (
        <div>
            <h2>Party Count: {trainerData.party_count}</h2>
            <h5>{trainerData.name}'s Party: </h5>
            LIST ASSOCIATED TRAINER POKEMON
            <br/>
        </div>
    )
}
