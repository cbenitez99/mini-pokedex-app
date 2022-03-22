import React from 'react'
import EditMoves from "./EditMoves"

const MoveInfo = ({userPokemon, setUserPokemon, clickedForm, setClickedForm, hiddenForm, setHiddenForm, handleDelete, user}) => {
    const handleMoves = () => {
        setClickedForm(true)
        setHiddenForm(false)
    }
    console.log(userPokemon)
   
    if (userPokemon.moves.length > 0) {
        return (
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