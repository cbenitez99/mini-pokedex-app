import "../App.css"
import React from "react"

function FindPokemon({ pokemonData, handleCapture, handleSubmit, errors, setCurrentPokemon }) {
    
    return (
        <div className="pokemon-form">
            <form className="pokemon-search" onSubmit={handleSubmit}>
                <p>Find a Pokemon by name or it's National Pokedex number!</p>
                <label>
                    <input type="text" placeholder="Find Pokemon by: Name/ID" onChange={(e) => {setCurrentPokemon(e.target.value)}}/>
                </label>
            </form>
        {pokemonData.map((data) => {
            return (
                <div key={data.id} className="container">
                    <div className="divTable">
                        <img className="sprite" src={data.sprites["front_default"]} alt="poke-sprite" />
                        <div className="divTableBody">

                            <p style={{ color: "red" }}>{errors}</p>
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
            <br />
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