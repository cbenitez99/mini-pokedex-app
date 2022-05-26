import React, {useState, useEffect, useContext} from 'react';
import PokemonCard from './PokemonCard';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';

const TrainerProfile = () => {
    const {user} = useContext(AppContext);
    let navigate = useNavigate();
    const [userPokemon, setUserPokemon] = useState([]);
    const [sortedPokemon, setSortedPokemon] = useState(false);

    useEffect(() => {
        fetch(`/users/${user.id}`)
        .then((resp) => (resp.json()))
        .then(userData => {
            setUserPokemon(userData.pokemons)
        })
    }, [user.id])

    const handleClick = () => {
        navigate(`/find-pokemon`)
        setUserPokemon(userPokemon)
    };

    const handleDelete = (id) => {
        let removedPokemon = userPokemon.filter((pokemon) => pokemon.id !== id)
        setUserPokemon(removedPokemon)
        fetch(`/pokemons/${id}`, {
          method: "DELETE",
          headers: {"Content-Type":"application/json"}
        })
        .then(resp => {
            if(resp.ok){
                navigate(`/users/${user.id}`)
            } else {
                alert(`Oh no! It'll follow you forever!`)
            }
        })
    };
    //Two fncs. that iterate through an array of objects
    //then uses obj property to return obj with new condition applied.
    const handleSortByName = () => {
        const sortedByName = userPokemon.sort(function(a, b) {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
        });
        setUserPokemon(sortedByName)
        setSortedPokemon(true)
        console.log(sortedPokemon)
    };

    const handleSortCreated = () => {
        const sortedByCreated = userPokemon.sort(function(a, b) {
        let createdA = a.created_at;
        let createdB = b.created_at;
        return (createdA < createdB) ? -1 : (createdA > createdB) ? 1 : 0;
        });
        setUserPokemon(sortedByCreated)
        setSortedPokemon(false)
    };

    return (
        <div className='trainer'>
            <div className='trainer-content'>
                <h1>{user.username}'s Party</h1>
                { userPokemon.length > 0 ? <><PokemonCard user={user} userPokemon={userPokemon} handleDelete={handleDelete}/>
                <button className="sort-button" onClick={handleSortByName}>Sort By: Name</button> 
                <button className="sort-button" onClick={handleSortCreated}>Sort By: Captured</button></>
                : 
                <p>Go to the Pokedex to add Pokemon!</p>
                }
                <p>
                    <button onClick={handleClick} className="button-82-pushable">
                        <span className="button-82-shadow"></span>
                        <span className="button-82-edge"></span>
                        <span className="button-82-front text">
                        Pokedex
                        </span>
                    </button> 
                </p>
            </div>  
        </div>
    );
};

export default TrainerProfile;

