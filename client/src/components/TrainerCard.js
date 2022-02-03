import React from 'react';

export default function TrainerCard({trainerData}) {
    return (
        <div>
            <p>{trainerData.name} has {trainerData.party_count} Pokemon in their party!</p>
        </div>
    )
}
