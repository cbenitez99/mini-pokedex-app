import React from 'react'
import EditMoves from "./PokemonForms/EditMoves"
//deconstructed props stem from PokemonInfo prop-drilling, prevent this with useContext() somehow.

const MoveInfo = ({userPokemon, setUserPokemon, clickedForm, setClickedForm, hiddenForm, setHiddenForm, handleDelete, user}) => {
    
    const handleMoves = () => {
        setClickedForm(true)
        setHiddenForm(false)
    }
   
    if (userPokemon.moves.length > 0) {
        return (
        <div className='move-container'>
                <br/>
                <h1 style={{color: "red"}}>{userPokemon.name}'s Moves:</h1>
                {userPokemon.moves.map((move) => 
                <div className="move-list" key={move.id}>
                    <p><strong>{move.name}</strong></p> 
                    <p>
                        {move.description}
                    </p>
                    <a id="x-button" href="#/" onClick={()=>handleDelete(move.id)}>Forget Move</a>
                </div>)}
                <br/>
                {hiddenForm ? <button className="button-82-pushable" onClick={handleMoves}><span className="button-82-front text">Add Move</span></button> : false}
                {clickedForm ? <EditMoves user={user} userPokemon={userPokemon} setUserPokemon={setUserPokemon} setHiddenForm={setHiddenForm} setClickedForm={setClickedForm}/> : null}
         </div> )
    } else {
        return (
        <div className='move-container-empty'>
            <br/>
            <h1 style={{color: "red"}}>{userPokemon.name} has no moves!</h1>
            <br/>
            {hiddenForm ? <button className="button-82-pushable" onClick={handleMoves}><span className="button-82-front text">Add Move</span></button> : false}
            {clickedForm ? <EditMoves user={user} userPokemon={userPokemon} setUserPokemon={setUserPokemon} setHiddenForm={setHiddenForm} setClickedForm={setClickedForm}/> : null}
        </div> 
        )
    }
};

export default MoveInfo;