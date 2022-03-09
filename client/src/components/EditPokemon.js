import React, {useState} from 'react'
import "../App.css"

const EditPokemon = () => {
    const [moves, setMoves] = useState([]);

    const handleClick = () =>{
        fetch('/moves')
        .then((resp)=>resp.json())
        .then(data => {
            setMoves(data)
        })  
    }
    let newMove = moves.map((move) => (
        <li>{move.name}</li>
    ))
    
    return (
        <div className="info-container">
            <h1>Add Moves</h1>
            <button onClick={handleClick}>+</button>
            <ol>{newMove}</ol>
        </div> 
    );
}

export default EditPokemon;
