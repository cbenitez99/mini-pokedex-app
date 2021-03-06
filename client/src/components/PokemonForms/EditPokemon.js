import React, {useContext, useState} from 'react'
import { useParams } from 'react-router-dom'
import { MethodsContext } from '../PokemonInfo';

//deconstructed props stem from PokemonInfo prop-drilling, prevent this with useContext() somehow.
const EditPokemon = ({setHidden}) => {
    const {setUserPokemon, userPokemon, setClicked} = useContext(MethodsContext)
    const {id} = useParams();
    const [nickname, setNickname] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault()
        let params = {
            ...userPokemon,
            name: nickname
        };
        fetch(`/pokemons/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        })
        .then((resp)=>(resp.json()))
        .then((data)=> {
            setUserPokemon(data)
            alert("Name changed!")   
            setHidden(true)        
            setClicked(false)
        });
    };
    
    const handleCancel = () => {
        setClicked(false);
        setHidden(true);
    };

    return (
        <div className='name-change-form'>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setNickname(e.target.value)} placeholder="Enter nickname..."/>
                <br/>
                <button className='sort-button2' type="submit">Change Name</button>
                <button className='sort-button2' onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
};

export default EditPokemon; 