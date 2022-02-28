import React, {useState, useEffect} from 'react';
import PokemonCard from './PokemonCard';
import { useNavigate } from 'react-router-dom';

const TrainerProfile = ({user}) => {
    let navigate = useNavigate();
    const [userPokemon, setUserPokemon] = useState([]);
    // const [moves, setMoves] = useState([]);
    useEffect(() => {
        if (!!user.id) fetch(`/users/${user.id}`)
        .then((resp) => (resp.json()))
        .then(userData => {
            setUserPokemon(userData.pokemons)
            // setMoves(userData.moves)
        })
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
                    <h1 className='user-name'>{user.username}'s Party: </h1>
                    <PokemonCard userPokemon={userPokemon} handleDelete={handleDelete} user={user}/>
                    <h3>'Release' or see 'More Info' about your Pokemon!</h3>

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

