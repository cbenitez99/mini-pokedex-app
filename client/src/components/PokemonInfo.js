import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import EditPokemon from './EditPokemon';
import MoveInfo from './MoveInfo';

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
            <h1>Name: {userPokemon.name}</h1>
            <p>Type: {userPokemon.poke_type}</p>     
            <img className='pokemon-card' src={userPokemon.image} alt={`No pic of ${userPokemon.name}!`}/>
            <br/>
            {/* {<PokemonStats userPokemon={userPokemon}/>} */}
            {hidden ?  <button className="button-82-pushable" onClick={handleClick}><span className="button-82-front text">Rename {userPokemon.name}</span></button> : false }
            {clicked ? <EditPokemon setUserPokemon={setUserPokemon} userPokemon={userPokemon} setHidden={setHidden} setClicked={setClicked}/> : null}
            {<MoveInfo clickedForm={clickedForm} setClickedForm={setClickedForm} setClicked={setClicked} 
            setHiddenForm={setHiddenForm} userPokemon={userPokemon} setUserPokemon={setUserPokemon} hiddenForm={hiddenForm} 
            handleDelete={handleDelete} user={user}/>}
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