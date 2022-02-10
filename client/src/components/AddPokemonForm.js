import axios from "axios"
import "../App.css"
import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
const AddPokemonForm = ({user}) => {
    const [pokemon, setPokemon] = useState("pikachu");
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonType, setPokemonType] = useState("");
    let navigate = useNavigate();
    // const [caughtPokemon, setCaughtPokemon] = useState([])

    const handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase());
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        getPokemon();
    };
    const getPokemon = async () => {
        const toArray = [];
        try {
          const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
          const res = await axios.get(url);
          toArray.push(res.data);
          setPokemonType(res.data.types[0].type.name.toUpperCase());
          setPokemonData(toArray);
        } catch (e) {
          console.log(e);
        }
    };

    const handleClick = (e) => {
        e.preventDefault()
        let mappedData = pokemonData.map((pokemon) => pokemon.name)
        alert( `You caught ${mappedData}!`)
        navigate(`/users/${user.id}`)
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                    type="text"
                    onChange={handleChange}
                    placeholder="Find Pokemon"
                    />
                </label>
            </form>
        {pokemonData.map((data) => {
        return (
            <div key={data.id}className="container">
                <button onClick={handleClick}>Add to Party!</button>
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
export default AddPokemonForm;