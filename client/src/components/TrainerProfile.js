import React, {useState, useEffect} from 'react';
import PokemonCard from './PokemonCard';

const TrainerProfile = ({user}) => {
    const [userPokemon, setUserPokemon] = useState([]);
    useEffect(() => {
        fetch(`/pokemons`)
        .then((resp) => (resp.json()))
        .then(data => setUserPokemon(data))
    }, [])

    
    if (!!user.id) {
        return (
            <div className='trainer'>
                <h1>{user.username}'s Party: </h1>
                <hr/>
                <PokemonCard userPokemon={userPokemon} user={user}/>
            </div>
        );
    } else {
        return (
            <div className='trainer'>
                <h3>Please Log-In or Sign-Up First</h3>
            </div>
        );
    }
    
}

export default TrainerProfile;

