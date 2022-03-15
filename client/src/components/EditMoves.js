import React, {useState} from 'react'
// import { useParams } from 'react-router-dom';

const EditMoves = ({setHiddenForm, setClickedForm, user, userPokemon}) => {

    // let navigate = useNavigate();
    // const {id} = useParams();
    const [moveName, setMoveName] = useState("");
    const [description, setDescription] = useState("");
    const [moveData, setMoveData] = useState({
        name: moveName,
        description: description,
        pokemon_id: userPokemon.id,
        user_id: user.id
    });
    
    //------------------------------------//
    const handleSubmit = (e) => {
        e.preventDefault()
        let params = {
            moveData
        }
        fetch("/moves", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({...params})
        })
        .then((resp)=>(resp.json()))
        .then((data)=> {
            setMoveData({
                name: moveName,
                description: description,
                pokemon_id: userPokemon.id,
                user_id: user.id
            });
            // setMoveData(data)
            // setDescription(data)
            console.log(data)
            alert("Success!")
            // navigate(`/users/${user.id}`)
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
                <button onClick={handleSubmit}>Create Move</button>
                <button onClick={handleCancel}type="submit">Cancel</button>
            </form>
        </div>
    );
}
export default EditMoves;