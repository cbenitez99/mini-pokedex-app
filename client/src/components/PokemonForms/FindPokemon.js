import "../../App.css"
import React, {useState, useContext} from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PokemonStats from "../PokemonStats";
import { AppContext } from "../../App";

const FindPokemon = () => {
    const {user} = useContext(AppContext)

    let navigate = useNavigate();
    const [currentPokemon, setCurrentPokemon] = useState("");
    const [pokemonData, setPokemonData] = useState([]);
    const [errors, setErrors] = useState([]);
    const [formData, setFormData] = useState({});
    const [errorMsg, setErrorMsg] = useState([]);

    const handleChange = (e) => {
        setCurrentPokemon(e.target.value.toLowerCase());
    };

    const getPokemon = async () => {
        const toArray = [];
        const url = `https://pokeapi.co/api/v2/pokemon/${currentPokemon}`;
        try {
            const res = await axios.get(url);
            setFormData(
                {
                    name: res.data.name.toUpperCase(),
                    poke_type: res.data.types.map((type)=>type.type.name.toUpperCase()).join(" & "),
                    image: res.data.sprites["front_default"],
                    user_id: user.id,
                }
            )
            toArray.push(res.data);
            setPokemonData(toArray)
        } catch (e) {
            setErrorMsg(`Invalid Name or ID!`)
        }
    };  

    const handleSubmit = (e) => {
        e.preventDefault();
        getPokemon();
        setErrorMsg("")
    };

    const handleCaptureClick = (e) => {
        e.preventDefault()
        let params = {
            ...formData
        }
        fetch("/pokemons", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        })
        .then(resp => {
            if(resp.ok){
                resp.json()
                .then((json) => {
                    alert(`You caught, ${json.name}!`)
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
    <div className="pokemon-form">
        <form className="pokemon-search" onSubmit={handleSubmit}>
            <h3>Find a Pokemon by Name</h3>
            OR
            <h3>Number between 1 and 898 </h3>            
            <label>
                <input type="text" className="text-area-search" placeholder="Find a Pokemon by Name / Number" onChange={handleChange}/>
            </label>
            <br/>
            <button className="button-82-pushable" onClick={handleSubmit}>
                <span className="button-82-shadow"></span>
                <span className="button-82-edge"></span>
                <span className="button-82-front text">
                    Search
                </span>
            </button>
        </form>
        <p className="invalid-search">{errorMsg}</p>
        {<PokemonStats pokemonData={pokemonData} handleCaptureClick={handleCaptureClick} errors={errors}/>}
        <br/>
    </div>
    
    );
};
export default FindPokemon;