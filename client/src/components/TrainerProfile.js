import React, {useState, useEffect} from 'react';
import PokemonCard from './PokemonCard';

const TrainerProfile = ({user}) => {
    const [userPokemon, setUserPokemon] = useState([]);
    useEffect(() => {
        fetch(`/pokemons`)
        .then((resp) => (resp.json()))
        .then(data => setUserPokemon(data))
    }, [])

    let mappedPokemon = userPokemon.map((pokemon)=> (pokemon.id))

    const handleClick = (e) => {
        e.preventDefault()
        fetch(`/pokemons/${mappedPokemon}`, {
          method: "DELETE",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          }
        }).then(resp => {
            console.log(mappedPokemon)
        //   alert(`Bye-bye ${pokemon.name}! `)
        })
    }

    if (!!user.id) {
        return (
            <div className='trainer'>
                <h5>{user.username}'s Party: </h5>
                <hr/>
                <PokemonCard userPokemon={userPokemon} handleClick={handleClick}/>
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

