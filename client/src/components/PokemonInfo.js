import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

const PokemonInfo = ({user}) => {
    const {id} = useParams();

    const [pokemonData, setPokemonData] = useState([]);
    useEffect(() => {
        fetch(`/pokemons/${id}`)
        .then((resp) => (resp.json()))
        .then(data => {
           setPokemonData(data)
        })
    }, [id])



    // const shuffled = moves.sort(() => 0.5 - Math.random());
    // let selected = shuffled.slice(0, 4);
    // let new_moves = selected.map((move) => (<li key={id}>{move}</li>))

    if(pokemonData.name) {
        return (
        <div className="info-container" key={pokemonData.id}>
            <h1>Name: {pokemonData.name}</h1>
            <p>Type: {pokemonData.poke_type}</p> 
            <img className='pokemon-card' src={pokemonData.image} alt={`No pic of ${pokemonData.name}!`}/>
        </div> 
        );
    } else {
        return (
        <div className="info-container" key={pokemonData.id}>
            <h1>No data to show!</h1>
        </div>   
    );
    }
}

export default PokemonInfo;
