import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import EditPokemon from './EditPokemon';
import EditMoves from './EditMoves';
// import PokemonStats from './PokemonStats';

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
    //handle render logic

    if(userPokemon.name) {
        return (
        <div className="info-container" key={userPokemon.id}>
            <h1>Name: {userPokemon.name}</h1>
            <p>Type: {userPokemon.poke_type}</p>     
            <img className='pokemon-card' src={userPokemon.image} alt={`No pic of ${userPokemon.name}!`}/>
            <br/>
            {/* {<PokemonStats userPokemon={userPokemon}/>} */}
            {hidden ?  <button className="button-82-pushable" onClick={handleClick}><span className="button-82-front text">Rename {userPokemon.name}</span></button> : false }
            {clicked ? <EditPokemon setUserPokemon={setUserPokemon} userPokemon={userPokemon} setHidden={setHidden} setClicked={setClicked}/> : null}
            { userPokemon.moves.length > 0 ? 
            <div className='move-container'>
                <br/>
                <h1 style={{color: "red"}}>Your Moves:</h1>
                {userPokemon.moves.map((move) => 
                <div className="move-list" key={move.id}>
                    <h2><strong>{move.name}</strong></h2> 
                    <li>
                        {move.description}
                    </li>
                    <a id="x-button" href="#/" onClick={()=>handleDelete(move.id)}>Forget Move</a>
                </div>)}
                <br/>
                {hiddenForm ? <button className="button-82-pushable" onClick={handleMoves}><span className="button-82-front text">Add Move</span></button> : false}
                {clickedForm ? <EditMoves user={user} userPokemon={userPokemon} setUserPokemon={setUserPokemon} setHiddenForm={setHiddenForm} setClickedForm={setClickedForm}/> : null}
            </div> 
            : 
            <div className='move-container-empty'>
                <br/>
                <h1 style={{color: "red"}}>{userPokemon.moves.length}, moves!</h1>
                <br/>
                {hiddenForm ? <button className="button-82-pushable" onClick={handleMoves}><span className="button-82-front text">Add Move</span></button> : false}
                {clickedForm ? <EditMoves user={user} userPokemon={userPokemon} setUserPokemon={setUserPokemon} setHiddenForm={setHiddenForm} setClickedForm={setClickedForm}/> : null}
            </div> }
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