import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import EditPokemon from './EditPokemon';

const PokemonInfo = ({user}) => {
    const {id} = useParams();
    const [pokemon, setPokemon] = useState([]);
    const [clicked, setClicked] = useState(false);
    const [hidden, setHidden] = useState(true)
    const [allMoves, setAllMoves] = useState([]);
    // const [myMoves, setMyMoves] = [];
  
    useEffect(() => {
        fetch(`/pokemons/${id}`)
        .then((resp) => (resp.json()))
        .then(data => {
           setPokemon(data)
        //    setChosenMove(data.poke_moves)
        })
    }, [id])

    const handleClick = () => {
        setClicked(true)
        setHidden(false)
    }

    const handleAddMove = (move) => {
        console.log(move) //ONE SELECTED MOVE
        // let params = {...move}
        fetch(`/pokemons/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({poke_moves: move}) 
        })
        .then((resp)=>(resp.json()))
        .then((pokemonData)=> {
            alert("Move Saved!")
            console.log(pokemonData)
            // navigate(`/users/${user.id}`)
        })
    }

    const findRandomMoves = () => {
        fetch("/moves")
        .then((resp)=>(resp.json()))
        .then(data => {
            setAllMoves(data)
            console.log(data) //ALL THE MOVES
        })
    }
    const shuffled = allMoves.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 4);
    let new_moves = selected.map((move) => (
        <div className="moves-card" key={move.id}>
            <p>
                {move.name.toUpperCase()}: 
                <button onClick={()=>handleAddMove(move)}>+</button>
                <br/>
                {move.description}
            </p>
        </div>
    ));

    if(pokemon.name) {
        return (
        <div className="info-container" key={pokemon.id}>
            <h1 className='info-name'>Name: {pokemon.name}</h1>
            <p className='info-type'>Type: {pokemon.poke_type}</p>         
            <img className='pokemon-card' src={pokemon.image} alt={`No pic of ${pokemon.name}!`}/>
            <br/>
            {hidden ?  <button onClick={handleClick}>Rename {pokemon.name}</button> : false }
            {clicked ? <EditPokemon user={user} setHidden={setHidden} setClicked={setClicked}/> : null}
            <h1>Moves:</h1>
            {new_moves}
            <button onClick={findRandomMoves}>Randomize Moves</button>
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
