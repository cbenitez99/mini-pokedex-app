import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

const PokemonInfo = ({user}) => {
    const {id} = useParams();

    const [pokemonData, setPokemonData] = useState([]);
    const [moves, setMoves] = useState([]);
    useEffect(() => {
        fetch(`/pokemons/${id}`)
        .then((resp) => (resp.json()))
        .then(data => {
           setPokemonData(data)
        })
    }, [id])

    const handleClick = () =>{
        fetch('https://pokeapi.co/api/v2/move?offset=50&limit=100')
        .then((resp)=>resp.json())
        .then(data => {
            setMoves(data.results)
        })
    }
    

    if(pokemonData.name) {
        return (
        <div className="info-container" key={pokemonData.id}>
            <h1>Name: {pokemonData.name}</h1>
            <p>Type: {pokemonData.poke_type}</p> 
            Moves: 
            <ol>
                <li>{pokemonData.moves.map((move)=>move.name)}</li>
            </ol>
            {console.log(moves)}
            <img className='pokemon-card' src={pokemonData.image} alt={`No pic of ${pokemonData.name}!`}/>
            <button onClick={handleClick}>Add moves</button>

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
