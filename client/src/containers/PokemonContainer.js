import React, {useState} from 'react';
import FindPokemon from '../components/FindPokemon';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function PokemonContainer ({user, getPokemonMoves}) {
    let navigate = useNavigate();
    const [pokemon, setPokemon] = useState("");
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonType, setPokemonType] = useState("");
    const [errors, setErrors] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        types: "",
        url: "",
        user_id: user.id
    });
    
    const getPokemon = async () => {
        try {
            const toArray = [];
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const res = await axios.get(url);
            toArray.push(res.data);
            setPokemonType(res.data.types[0].type.name.toUpperCase());
            getPokemonMoves(res.data.moves)
            setPokemonData(toArray)
        } catch (e) {
            alert("Pokemon does not exist!");
        }
    };

    const handleAddChange = (e) => {
        setFormData(prev => {
            return { ...prev, 
                [e.target.name]: e.target.value
            }
        })
    };   

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
                    navigate(`/users/${user.id}`)
                })
            } else {
                resp.json()
                .then((json) => {
                    setErrors(json.errors)
                });
            }
        });
    };

    return (
        <div className='find-pokemon-page'>
            <FindPokemon getPokemon={getPokemon} setPokemon={setPokemon} pokemonData={pokemonData} pokemonType={pokemonType}/>
            <form className="pokemon-form" onSubmit={handleAddSubmit}>
            <p>Fill with search results to capture!</p>
                <input onChange={handleAddChange} type="text" placeholder="Enter Pokemon Name" name="name" value={formData.name}/>
                <br/>
                <input onChange={handleAddChange} type="text" name="types" placeholder='Enter Pokemon Type' value={formData.types}/>
                <br/>(hint: right click pokemon image,<br/>then copy image address!)<br/>
                <input onChange={handleAddChange} type="text" placeholder="Image Link" name="url" value={formData.url}/>
                <br/>
                <button type="submit">Capture</button>
                <p style={{color: "black"}}>{errors.join(",  ")}</p>
            </form>
        </div>
    );
}

export default PokemonContainer;
