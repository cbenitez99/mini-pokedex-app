import React, {useState} from 'react'
import "../App.css"
import { useNavigate, useParams } from 'react-router-dom'

const EditPokemon = ({user}) => {

    let navigate = useNavigate();
    const {id} = useParams();
    const [nickname, setNickname] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`/pokemons/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: nickname})
        })
        .then((resp)=>(resp.json()))
        .then((data)=> {
            setNickname(data.name)
            alert("Successfully nicknamed you Pokemon!")
            navigate(`/users/${user.id}`)
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                    <textarea
                    placeholder="Enter nickname..."
                    onChange={(e) => setNickname(e.target.value)}/>
                <br/>
                <button type="submit">Change nickname</button>
            </form>
        </div>
    );
}

export default EditPokemon;
