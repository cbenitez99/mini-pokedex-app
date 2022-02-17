import React, {useState} from 'react';
import FindPokemon from '../components/FindPokemon';
import { useNavigate } from 'react-router-dom';

function PokemonContainer ({user}) {
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        name: "",
        types: "",
        url: "",
        user_id: user.id
    });
    let navigate = useNavigate();
    const handleAddChange = (e) => {
        setFormData(prev => {
            return { ...prev, 
                [e.target.name]: e.target.value
            }
        })
    }   
    const handleAddSubmit = (e) => {
        e.preventDefault()
        let params = {
          ...formData  
        }
        fetch("/pokemons", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        })
        .then(resp => {
            if(resp.ok){
                resp.json()
                .then((json) => {
                    navigate(`/users/${json.id}`)
                })
            } else {
                resp.json()
                .then((json) => {
                    setErrors(json.errors)
                })
            }
        })
    }

    return (
        <div className="add-pokemon-form">
            <FindPokemon />
            <form onSubmit={handleAddSubmit}>
                <br/>
                <br/>
                <br/>
            <p>Fill with correct data to capture!</p>
                <label htmlFor="Pokemon Name">Pokemon Name:</label>
                <input onChange={handleAddChange} type="text" placeholder="name" name="name" value={formData.name}/>
                <label htmlFor="Pokemon Type">Pokemon Type:</label>
                <input onChange={handleAddChange} type="text" name="types" placeholder='type' value={formData.types}/>
                <label htmlFor="Sprite">Photo: <br/> (hint: right click pokemon image, <br/> then copy image address!):</label>
                <input onChange={handleAddChange} type="text" placeholder="img address" name="url" value={formData.url}/>
                <button type="submit">Capture</button>
                <p style={{color: "black"}}>{errors.join(",  ")}</p>
            </form>
        </div>
    );
}

export default PokemonContainer;
