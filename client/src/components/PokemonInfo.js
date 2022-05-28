import React , {useEffect, useState, useContext, createContext} from 'react'
import { useParams } from 'react-router-dom';
import EditPokemon from './PokemonForms/EditPokemon';
import MoveInfo from './MoveInfo';
import { AppContext } from '../App';

export const MethodsContext = createContext(null);

const PokemonInfo = () => {
    const {user} = useContext(AppContext)
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
        <MethodsContext.Provider value={{ setUserPokemon, userPokemon, setClicked, setClickedForm, setHiddenForm}} className="info-container" key={userPokemon.id}>
            <div className='info-specs'>
                <h2>{userPokemon.name}</h2>
                <img className="image-poke" src={userPokemon.image} alt={`No pic of ${userPokemon.name}!`}/>
                <h2>{userPokemon.poke_type}</h2>     
            </div>
            {hidden ?  <button className="sort-button" onClick={handleClick}><span >Rename {userPokemon.name}</span></button> : false }
            {clicked ? <EditPokemon setHidden={setHidden} /> : null}
            {<MoveInfo clickedForm={clickedForm} hiddenForm={hiddenForm} 
            handleDelete={handleDelete}/>}
        </MethodsContext.Provider> 
        );
    } 
        return (
        <div className="info-container">
            <h1>No data to show!</h1>
        </div>   
    );
    
}

export default PokemonInfo;