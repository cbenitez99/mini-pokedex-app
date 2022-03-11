import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import EditPokemon from './EditPokemon';

const PokemonInfo = ({user}) => {
    const {id} = useParams();
    const [pokemonData, setPokemonData] = useState([]);
    const [clicked, setClicked] = useState(false);
    const [hidden, setHidden] = useState(true)
    const [allMoves, setAllMoves] = useState([]);

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
    // let move_names = allMoves.map((move)=>(move.name))
    // let move_description = allMoves.map((move)=>(move.description))

    const findMoves = () => {
        fetch("/moves")
        .then((resp)=>(resp.json()))
        .then(data => {
            setAllMoves(data)
            console.log(data)
        })
    }


   

    if(pokemonData.name) {
        return (
        <div className="info-container" key={pokemonData.id}>
            <h1 className='info-name'>Name: {pokemonData.name}</h1>
            <p className='info-type'>Type: {pokemonData.poke_type}</p>         
            <img className='pokemon-card' src={pokemonData.image} alt={`No pic of ${pokemonData.name}!`}/>
            <br/>
            {hidden ?  <button onClick={handleClick}>Rename {pokemonData.name}</button> : false }
            {clicked ? <EditPokemon user={user} setHidden={setHidden} setClicked={setClicked}/> : null}
            <h3>Moves: </h3>
            {/* <li>{move_names}</li> */}
            <button onClick={findMoves}>Add Moves</button>
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
