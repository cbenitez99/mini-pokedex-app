import "../App.css"
import React from "react"

const FindPokemon = ({pokemonData, pokemonType, handleChange, handleSubmit, handleClick}) => {
    
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
export default FindPokemon;