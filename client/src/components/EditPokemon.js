import React, {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditPokemon = ({user, setClicked, setHidden}) => {

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
            setNickname(data)
            alert("Success!")
            navigate(`/users/${user.id}`)
        });
    };

    const handleCancel = () => {
        setClicked(false);
        setHidden(true);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setNickname(e.target.value)} placeholder="Enter nickname..."/>
                <br/>
                <button type="submit">Change Name</button>
                <button onClick={handleCancel}type="submit">Cancel</button>
            </form>
        </div>
    );
}

export default EditPokemon;
