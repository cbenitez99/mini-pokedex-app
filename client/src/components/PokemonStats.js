import React from 'react'

const PokemonStats = ({pokemonData, errors, handleCaptureClick}) => {

    return (
        <div className="mini-pokemon-form">
            {pokemonData.map((data) => {
        return (
            <>
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
                        <div className="divTableCell">{data.types.map((type)=>type.type.name.toUpperCase()).join(" / ")}</div>
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
            </div><br/>
            <button className="button-82-pushable" onClick={handleCaptureClick}>
                <span className="button-82-shadow"></span>
                <span className="button-82-edge"></span>
                <span className="button-82-front text">Capture</span>
            </button>
        </>
        );
        })}
        </div>
    );
}
export default PokemonStats; 