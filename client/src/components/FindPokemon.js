import "../App.css"
import React, {useState}from "react"
import axios from "axios";


const FindPokemon = () => {

    const [pokemon, setPokemon] = useState("");
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonType, setPokemonType] = useState("");
    //////Recieve call from FindPokemon.js
    const handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getPokemon();
    };

    const getPokemon = async () => {
        try {
            const toArray = [];
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const res = await axios.get(url);
            toArray.push(res.data);
            setPokemonType(res.data.types[0].type.name.toUpperCase());
            setPokemonData(toArray)
        } catch (e) {
            alert("Pokemon does not exist!");
        }
    };
    
    return (
        <div>
        <form className="search-form" onSubmit={handleSubmit}>
            <p>Find a Pokemon by name or it's National Pokedex number!</p>
            <label>
                <input type="text" placeholder="Name/ID" onChange={handleChange}/>
            </label>
        </form>
        {pokemonData.map((data) => {
        return (
            <div key={data.id} className="container">
                <img src={data.sprites["front_default"]} alt="poke-sprite"/>
                <div className="divTable">
                <div className="divTableBody">
                    <div className="divTableRow">
                        <div className="divTableCell">Name</div>
                        <div className="divTableCell">{data.name.toUpperCase()}</div>
                    </div>

                    <div className="divTableRow">
                        <div className="divTableCell">Entry</div>
                        <div className="divTableCell">#{data.id}</div>
                    </div>

                    <div className="divTableRow">
                        <div className="divTableCell">Type</div>
                        <div className="divTableCell">{pokemonType}</div>
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
        </div>
    );
}
export default FindPokemon;