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
        types: pokemonType,
        url: pokemonUrl,
        user_id: user.id
    });

    const getPokemon = async () => {
        try {
            const toArray = [];
            const url = `https://pokeapi.co/api/v2/pokemon/${currentPokemon}`;
            const res = await axios.get(url);
            setPokemonName(res.data.name.toUpperCase());
            setPokemonType(res.data.types.map((type)=>type.type.name.toUpperCase()).join(" / "))
            setPokemonUrl(res.data.sprites["front_default"])
            toArray.push(res.data);
            setPokemonData(toArray)

        } catch (e) {
            console.log("Pokemon does not exist!");
        }
    };  

    const handleCapture = (e) => {
        e.preventDefault()
        setFormData({
            name: pokemonName, 
            types: pokemonType, 
            url: pokemonUrl, 
            user_id: user.id
        })
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
                    alert("Nice Catch!")
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
    
    const handleChange = (e) => {
        setCurrentPokemon(e.target.value.toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getPokemon();
    };

    return (
    <div className="pokemon-form">
        <form  onSubmit={handleSubmit}>
            <p>Find a Pokemon by name or it's National Pokedex number!</p>
            <label>
                <input type="text" placeholder="Find Pokemon by: Name/ID" onChange={handleChange}/>
            </label>
        </form>
        {pokemonData.map((data) => {
        return (
            <div key={data.id} className="container">
                <img src={data.sprites["front_default"]} alt="poke-sprite"/>
                <div className="divTable">
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
                    <img src={data.sprites["back_default"]} alt="poke-sprite"/>
                </div>
            </div>
        );
        })}
        <br/>
      <button className="capture-bttn" onClick={handleCapture}>Capture</button>
    </div>
    );
}
export default FindPokemon;