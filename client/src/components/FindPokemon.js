import "../App.css"
import React, {useState} from "react"
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const FindPokemon = ({user, moves, handleSubmit, handleChange, formData, pokemonData}) => {
    const [errors, setErrors] = useState([]);

    let navigate = useNavigate();
    // const [currentPokemon, setCurrentPokemon] = useState("");
    // const [pokemonData, setPokemonData] = useState([]);
    // const [pokemonName, setPokemonName] = useState("")
    // const [pokemonType, setPokemonType] = useState("");
    // const [pokemonUrl, setPokemonUrl] = useState("");
    

    // const getPokemon = async () => {
    //     try {
    //         const toArray = [];
    //         const url = `https://pokeapi.co/api/v2/pokemon/${currentPokemon}`;
    //         const res = await axios.get(url);
    //         setPokemonName(res.data.name.toUpperCase());
    //         setPokemonType(res.data.types.map((type)=>type.type.name.toUpperCase()).join(" / "))
    //         setPokemonUrl(res.data.sprites["front_default"])
    //         setAllStats(res.data)
    //         toArray.push(res.data);
    //         console.log(res.data.moves)
    //         setPokemonData(toArray)

    //     } catch (e) {
    //         console.log("Invalid Name/ID");
    //     }
    // };  
//something on line 35 not working
    const handleCapture = (e) => {
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
                    console.log(json)
                    alert("Nice Catch!")
                    navigate(`/users/${user.id}`)
                })
            } else {
                resp.json()
                .then((json) => {
                    console.log(json)
                    setErrors(json.errors)
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
                        <div className="divTableCell">{data.types[0].type.name.toUpperCase()}</div>
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
        <button className="button-82-pushable" onClick={handleCapture}>
            <span className="button-82-shadow"></span>
            <span className="button-82-edge"></span>
            <span className="button-82-front text">
                Capture
            </span>
        </button>
    </div>
    );
}
export default FindPokemon;