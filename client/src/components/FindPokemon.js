import "../App.css"
import React, {useState} from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FindPokemon = ({user}) => {
    let navigate = useNavigate();
    const [currentPokemon, setCurrentPokemon] = useState("");
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonName, setPokemonName] = useState("")
    const [pokemonType, setPokemonType] = useState("");
    const [pokemonUrl, setPokemonUrl] = useState("");
    const [errors, setErrors] = useState([]);
    const [formData, setFormData] = useState({
        name: pokemonName,
        poke_type: pokemonType,
        image: pokemonUrl,
        user_id: user.id
    });

    const handleChange = (e) => {
        setCurrentPokemon(e.target.value.toLowerCase());
    };

    const getPokemon = async () => {
        const toArray = [];
        const url = `https://pokeapi.co/api/v2/pokemon/${currentPokemon}`;
        try {
            const res = await axios.get(url);
            setPokemonName(res.data.name.toUpperCase());
            setPokemonType(res.data.types.map((type)=>type.type.name.toUpperCase()).join(" / "))
            setPokemonUrl(res.data.sprites["front_default"])
            toArray.push(res.data);
            setPokemonData(toArray)
        } catch (e) {
            alert("Invalid Name/ID");
        }
    };  

    const handleSubmit = (e) => {
        e.preventDefault();
        getPokemon();
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
                    setFormData({
                        name: pokemonName, 
                        poke_type: pokemonType,
                        image: pokemonUrl, 
                        user_id: user.id
                    })
                });
            }
        });
    };

    return (
    <div className="pokemon-form">
        <form className="pokemon-search" onSubmit={handleSubmit}>
            <p>Find a Pokemon by name or it's National Pokedex number!</p>
            <label>
                <input type="text" placeholder="Find Pokemon by: Name/ID" onChange={handleChange}/>
            </label>
            <br/>
            <button className="button-82-pushable" onClick={handleSubmit}>
                <span className="button-82-shadow"></span>
                <span className="button-82-edge"></span>
                <span className="button-82-front text">
                    Search
                </span>
            </button>
            <button className="button-82-pushable" onClick={handleCaptureClick}>
                <span className="button-82-shadow"></span>
                <span className="button-82-edge"></span>
                <span className="button-82-front text">
                    Capture
                </span>
            </button>
        </form>
        {pokemonData.map((data) => {
        return (
            <div key={data.id} className="container">
                <div className="divTable">
                <img className="sprite" src={data.sprites["front_default"]} alt="poke-sprite"/>
                <div className="divTableBody">
                <p style={{color: "red"}}>{errors}</p> 
                    <div className="divTableRow">
                        <div className="divTableCell">ID</div>
                        <div className="divTableCell">{data.id}</div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell">Name</div>
                        <div className="divTableCell">{data.name.toUpperCase()}</div>
                    </div>

                    <div className="divTableRow">
                        <div className="divTableCell">Type</div>
                        <div className="divTableCell">{pokemonType}</div>
                    </div>

                    <div className="divTableRow">
                        <div className="divTableCell">HP</div>
                        <div className="divTableCell">❤️{data.stats[0].base_stat}</div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell">Height</div>
                        <div className="divTableCell">
                            {" "}
                            {Math.round(data.height * 3.9)}"
                        </div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell">Weight</div>
                        <div className="divTableCell">
                            {" "}
                            {Math.round(data.weight / 4.3)} LBS
                        </div>
                    </div>
            
                    </div>
                </div>
            </div>
        );
        })}
        <br/>
    </div>
    );
};
export default FindPokemon;