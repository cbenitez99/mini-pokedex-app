import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const EditMoves = ({setHiddenForm, setClickedForm, user, userPokemon}) => {
    let navigate = useNavigate();
    const [moveName, setMoveName] = useState("");
    const [moveDescription, setDescription] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let params = {
            name: moveName,
            description: moveDescription,
            pokemon_id: userPokemon.id,
            user_id: user.id
        }
        fetch("/moves", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        })
        .then((resp)=>(resp.json()))
        .then((data)=> {
            navigate(`/users/${user.id}`)
        })
    }
    const handleCancel = () => {
        setClickedForm(false)
        setHiddenForm(true)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                    <input onChange={(e) => setMoveName(e.target.value)} placeholder="Enter move Name..."/>
                    <br/>
                    <textarea onChange={(e) => setDescription(e.target.value)} placeholder="Enter move Description..."/>
                <br/>
                <button type="submit">Create Move</button>
                <button onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
}
export default EditMoves;