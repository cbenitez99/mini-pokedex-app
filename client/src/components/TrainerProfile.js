import React, {useState, useEffect} from 'react';
import PokemonCard from './PokemonCard';
import { useNavigate } from 'react-router-dom';

const TrainerProfile = ({user}) => {
    let navigate = useNavigate();
    const [userPokemon, setUserPokemon] = useState([]);
    useEffect(() => {
        if (!!user.id) fetch(`/users/${user.id}`)
        .then((resp) => (resp.json()))
        .then(userData => {
            setUserPokemon(userData.pokemons)
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

    const handleClick = () => {
        navigate(`/find-pokemon`)
    }
   
    return (
        <div className='trainer'>
            <div className='trainer-content'>
                <h1 className='user-name'>{user.username}'s Party: </h1>
                { user.pokemons.length <= 0 
                    ? 
                    <div className='trainer'>
                    <div className='trainer-content'>
                        <h3 className='user-name'>You have no Pokemon, {user.username}!
                            <div className="direct-profile" onClick={handleClick} style={{color: "purple", fontSize: 40}}>                    <br/>
                            Find Pokemon!
                            {console.log("AHALOL" + user)}
                            </div> 
                        </h3>
                    </div>  
                    </div> 
                    : 
                    <PokemonCard userPokemon={userPokemon} handleDelete={handleDelete} user={user}/>
                }
                <h3>Click <em>Release</em> to remove Pokemon from party.</h3>
                <h3>Click <em>More Info</em> to see more about that Pokemon.</h3>
            </div>  
        </div>
    );
}

export default TrainerProfile;

