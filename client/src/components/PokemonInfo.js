import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import EditPokemon from './EditPokemon';
import EditMoves from './EditMoves';

const PokemonInfo = ({user}) => {
    const {id} = useParams();
    const [userPokemon, setUserPokemon] = useState([]);
    const [clicked, setClicked] = useState(false);
    const [hidden, setHidden] = useState(true)
    const [clickedForm, setClickedForm] = useState(false);
    const [hiddenForm, setHiddenForm] = useState(true)

    useEffect(() => {
        fetch(`/pokemons/${id}`)
        .then((resp) => (resp.json()))
        .then(data => {
           setUserPokemon(data)
           console.log(data)
        })
    }, [id])

    const handleClick = () => {
        setClicked(true)
        setHidden(false)
    }

    const handleMoves = () => {
        setClickedForm(true)
        setHiddenForm(false)
    }

    const handleDelete = (move_id) => {
        fetch(`/moves/${move_id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }})
        .then((resp) => {
            let newMoves = userPokemon.moves.filter((move) => move.id !== move_id)
            setUserPokemon({...userPokemon, moves : newMoves})
        })
    }

    if(userPokemon.name) {
        return (
        <div className="info-container" key={userPokemon.id}>
            <h1 className='info-name'>Name: {userPokemon.name}</h1>
            <p className='info-type'>Type: {userPokemon.poke_type}</p>         
            <img className='pokemon-card' src={userPokemon.image} alt={`No pic of ${userPokemon.name}!`}/>
            <br/>
            {hidden ?  <button onClick={handleClick}>Rename {userPokemon.name}</button> : false }
            {clicked ? <EditPokemon user={user} setHidden={setHidden} setClicked={setClicked}/> : null}
            <div className='move-container'>
                <h1>Your Moves: </h1>
                {userPokemon.moves.map((move) => 
                <div className="move-list" key={move.id}>
                    <p>{move.name} <button onClick={()=>handleDelete(move.id)}> x
                    </button></p> 
                    <li>
                        {move.description}
                    </li>
                    <br/>
                </div>)}
                {hiddenForm ? <button onClick={handleMoves}>Add Move</button> : false}
                {clickedForm ? <EditMoves user={user} userPokemon={userPokemon} setHiddenForm={setHiddenForm} setClickedForm={setClickedForm}/> : null}
            </div> 
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