import React, {useState, useEffect} from 'react';
import PokemonCard from './PokemonCard';
import { useNavigate } from 'react-router-dom';

const TrainerProfile = ({user}) => {
    const [userPokemon, setUserPokemon] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        fetch(`/pokemons`)
        .then((resp) => (resp.json()))
        .then(data => setUserPokemon(data))
    }, [])

    function handleDelete(id) {
        const removedPokemon = userPokemon.filter((pokemon) => pokemon.id !== id)
        setUserPokemon(removedPokemon)
        fetch(`/pokemons/${id}`, {
          method: "DELETE",
          headers: {"Content-Type":"application/json"}
        }).then(resp => {
            if(resp.ok){
                console.log(resp)
              alert(`Bye-bye, ${removedPokemon.name}!`)  
              navigate(`/users/${user.id}`)
            } else {
              alert(`${removedPokemon.name} will follow you forever!`)
            }
        })
    };

    if (!!user.id) {
        return (
            <div className='trainer'>
                <h1>{user.username}'s Party: </h1>
                <hr/>
                <PokemonCard userPokemon={userPokemon} handleDelete={handleDelete}/>
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

