import React, {useState, useEffect} from 'react';
import PokemonCard from './PokemonCard';
import { useNavigate } from 'react-router-dom';

const TrainerProfile = ({user}) => {
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

    const handleDelete = (id) => {
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

    const handleClick = () => {
        navigate(`/find-pokemon`)
        setUserPokemon(userPokemon)
    }

    const handleSortByName = () => {
        const sorted = userPokemon.sort(function(a, b) {
        let nameA = a.name;
        let nameB = b.name;
        return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
        });
        setUserPokemon(sorted)
        setSortedPokemon(true)
    }

    const handleSortCreated = () => {
        const sorted = userPokemon.sort(function(a, b) {
        let nameA = a.created_at;
        let nameB = b.created_at;
        return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
        });
        setUserPokemon(sorted)
        setSortedPokemon(false)
    }
   
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

