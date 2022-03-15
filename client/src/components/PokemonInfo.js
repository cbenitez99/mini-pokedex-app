import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import EditPokemon from './EditPokemon';

const PokemonInfo = ({user}) => {
    const {id} = useParams();
    const [pokemon, setPokemon] = useState([]);
    const [clicked, setClicked] = useState(false);
    const [hidden, setHidden] = useState(true)
    // const [allMoves, setAllMoves] = useState([]);
    // const [moveData, setMoveData] = useState({
        
    // })
    // const [myMoves, setMyMoves] = useState([]);
  
    useEffect(() => {
        fetch(`/pokemons/${id}`)
        .then((resp) => (resp.json()))
        .then(data => {
           setPokemon(data)
        })
    }, [id])

    const handleClick = () => {
        setClicked(true)
        setHidden(false)
    }

    // const addMove = () => {
    //     let params = {
    //         ...moves
    //     }
    //     fetch(`/pokemons/${id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({poke_moves: {
    //             // id: params["id"],
    //             // name: params["name"],
    //             description: params["description"]
    //         }}) 
    //     })
    //     .then((resp)=>(resp.json()))
    //     .then((pokemonData)=> {
    //         // alert("Move Saved!")
    //         setPokemon(pokemonData)
    //         // navigate(`/users/${user.id}`)
    //     })
    // }
    // const shuffled = allMoves.sort(() => 0.5 - Math.random());
    // let selected = shuffled.slice(0, 4);
    // let new_moves = selected.map((move) => (
    //     <div className="moves-card" key={move.id}>
    //         <p>
    //             {move.name.toUpperCase()}: 
    //             <button onClick={handleAddMove}>+</button>
    //             <br/>
    //         </p>
    //     </div>
    // ));

    if(pokemon.name) {
        return (
        <div className="info-container" key={pokemon.id}>
            <h1 className='info-name'>Name: {pokemon.name}</h1>
            <p className='info-type'>Type: {pokemon.poke_type}</p>         
            <img className='pokemon-card' src={pokemon.image} alt={`No pic of ${pokemon.name}!`}/>
            <br/>
            {hidden ?  <button onClick={handleClick}>Rename {pokemon.name}</button> : false }
            {clicked ? <EditPokemon user={user} setHidden={setHidden} setClicked={setClicked}/> : null}
            <h1>Your Moves:</h1>
            {/* {myMoves}
            <button onClick={addMove}>Add Moves</button> */}
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
