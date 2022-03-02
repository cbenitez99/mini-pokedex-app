import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

const PokemonInfo = ({user, moves}) => {
    const {id} = useParams();

    const [pokemonData, setPokemonData] = useState([]);
    useEffect(() => {
        fetch(`/pokemons/${id}`)
        .then((resp) => (resp.json()))
        .then(data => {
            setPokemonData(data)
        })
    }, [user.id, id])

    const shuffled = moves.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 4);
    let new_moves = selected.map((move) => (move.move.name))


    return (
        <div className="info-container" key={id}>
            <h1>{pokemonData.name}</h1>
            <h1>{pokemonData.types}</h1> 
            {console.log(new_moves)}
            <img src={pokemonData.image} alt={`No pic of ${pokemonData.name}!`}/> 
        </div>        
    );
}

export default PokemonInfo;
