import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import EditPokemon from './EditPokemon';

const PokemonInfo = ({user}) => {
    const {id} = useParams();
    const [pokemonData, setPokemonData] = useState([]);
    const [clicked, setClicked] = useState(false);
    const [hidden, setHidden] = useState(true)

    useEffect(() => {
        fetch(`/pokemons/${id}`)
        .then((resp) => (resp.json()))
        .then(data => {
           setPokemonData(data)
        })
    }, [id])

    const handleClick = () => {
        setClicked(true)
        setHidden(false)
    }

    if(pokemonData.name) {
        return (
        <div className="info-container" key={pokemonData.id}>
            <h1 className='info-name'>Name: {pokemonData.name}</h1>
            <p className='info-type'>Type: {pokemonData.poke_type}</p> 
            {/* Moves:  */}
            <ol>
                {/* <li>{pokemonData.moves.map((move)=>move.name)}</li> */}
            </ol>
            {/* {console.log(moves)} */}
            <img className='pokemon-card' src={pokemonData.image} alt={`No pic of ${pokemonData.name}!`}/>
            <br/>
            {hidden ?  <button onClick={handleClick}>Nickname?</button> : false }
            {clicked ? <EditPokemon user={user}/> : null}

        </div> 
        );
    } else {
        return (
        <div className="info-container">
            <h1>No data to show!</h1>
        </div>   
    );
    }
}

export default PokemonInfo;
