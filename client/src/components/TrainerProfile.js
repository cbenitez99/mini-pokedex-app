import React, {useState, useEffect} from 'react';
import PokemonCard from './PokemonCard';
import { useNavigate } from 'react-router-dom';

const TrainerProfile = ({user}) => {
    let navigate = useNavigate();
    const [userPokemon, setUserPokemon] = useState([]);

    useEffect(() => {
        if (!!user.id) fetch(`/users/${user.id}`)
        .then((resp) => (resp.json()))
        .then(userData => setUserPokemon(userData.pokemons))
    }, [user.id])
    
    function handleDelete(id) {
        let removedPokemon = userPokemon.filter((pokemon) => pokemon.id !== id)
        setUserPokemon(removedPokemon)
        fetch(`/pokemons/${id}`, {
          method: "DELETE",
          headers: {"Content-Type":"application/json"}
        }).then(resp => {
            if(resp.ok){
              console.log(`Bye-bye!`)  
              navigate(`/users/${user.id}`)
            } else {
              alert(`Oh no! It'll follow you forever!`)
            }
        })
    };

    if (!!user.id) {
        return (
            <div className='trainer'>
                <div className='trainer-content'>
                    <h1>{user.username}'s Party: </h1>
                    <PokemonCard userPokemon={userPokemon} handleDelete={handleDelete} user={user}/>
                </div>  
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

