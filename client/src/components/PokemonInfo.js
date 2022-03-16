import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import EditPokemon from './EditPokemon';
import EditMoves from './EditMoves';
import { useNavigate } from 'react-router-dom';

const PokemonInfo = ({user}) => {
    const {id} = useParams();
    const [userPokemon, setUserPokemon] = useState([]);
    const [clicked, setClicked] = useState(false);
    const [hidden, setHidden] = useState(true)
    const [clickedForm, setClickedForm] = useState(false);
    const [hiddenForm, setHiddenForm] = useState(true)
    let navigate = useNavigate();

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
                    <p>{move.name} <button onClick={(e) => {
                        e.preventDefault()
                        fetch(`/moves/${move.id}`, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        }
                        }).then(resp => {
                            alert("Deleted!")
                           console.log(resp)
                           navigate(`/users/${user.id}`)
                        })
                    }}> x
                    </button></p> 
                    <li>
                        {move.description}
                    </li>
                    <br/>
                </div>)}
                {hiddenForm ? <button onClick={handleMoves}>Add Moves</button> : false}
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
// const [allMoves, setAllMoves] = useState([]);
    // const [moveData, setMoveData] = useState({
        
    // })
    // const [myMoves, setMyMoves] = useState([]);

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
    //         setuserPokemon(pokemonData)
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