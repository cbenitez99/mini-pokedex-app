import React, {useState} from 'react';
import FindPokemon from '../components/FindPokemon';
import { useNavigate } from 'react-router-dom';

const PokemonContainer = ({user, pokemonData, pokemonType, handleChange, handleSubmit}) => {
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
                    // console.log(json)
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
        <div className="text-black">
            <FindPokemon pokemonData={pokemonData} pokemonType={pokemonType} handleChange={handleChange} handleSubmit={handleSubmit}/>
            <br/>
            <br/>
            <br/>
            <form onSubmit={handleAddSubmit}>
                <label htmlFor="Pokemon Name">Name:</label>
                <input onChange={handleAddChange} type="text" name="name" value={formData.name}/>
                <label htmlFor="Pokemon Type">Type:</label>
                <input onChange={handleAddChange} type="text" name="types" value={formData.types}/>
                <label htmlFor="Sprite">Image Url:</label>
                <input onChange={handleAddChange} type="text" name="url" value={formData.url}/>
                <button type="submit">catch</button>
            </form>
            <p style={{color: "red"}}>{errors.join(",  ")}</p>
        </div>
    );
}

export default PokemonContainer;
