import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

const EditMoves = ({setHiddenForm, setClickedForm, user, userPokemon}) => {

    let navigate = useNavigate();
    // const {id} = useParams();
    const [moveName, setMoveName] = useState("");
    const [moveDescription, setDescription] = useState("");
    const [moveData, setMoveData] = useState({
        name: "",
        description: "",
        pokemon_id: userPokemon.id,
        user_id: user.id
    });
    
    //------------------------------------//
    const handleSubmit = (e) => {
        setMoveName(e.target.value)
        setDescription(e.target.value)
        e.preventDefault()
        let params = {
            ...moveData
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
            alert("Success!")
            setMoveData({
                name: moveName,
                description: moveDescription,
                pokemon_id: userPokemon.id,
                user_id: user.id
            });
            setMoveData(data)
            console.log(data)
            navigate(`/users/${user.id}`)
        })
    }
    const handleCancel = () => {
        setClickedForm(false)
        setHiddenForm(true)
    }

    // const handleDeleteMove = () => {
    //     fetch(`/moves/${id}`, {
    //         method: "DELETE",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(params)
    //     })
    // }

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