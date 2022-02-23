import "../App.css"
import React from "react"

const FindPokemon = ({getPokemon, setPokemon, pokemonData, pokemonType}) => {
    
    const handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getPokemon();
    };

    return (
    <div>
        <form className="pokemon-form" onSubmit={handleSubmit}>
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
    </div>
    );
}
export default FindPokemon;