import React from 'react'

const PokemonStats = ({pokemonData}) => {
    console.log(pokemonData)

    let stats = pokemonData.stats.map((stat) => <div className="stats-table">
    {/* <div className="divTableRow">
        <div className="divTableCell">Pokedex#</div>
        <div className="divTableCell">{stat.}</div>
    </div>

    <div className="divTableRow">
        <div className="divTableCell">HP</div>
        <div className="divTableCell">❤️{stat.}</div>
    </div>

    <div className="divTableRow">
        <div className="divTableCell">Height</div>
        <div className="divTableCell">
            {Math.round(stat.height * 3.9 )+ `"`}
        </div>
    </div>

    <div className="divTableRow">
        <div className="divTableCell">Weight</div>
        <div className="divTableCell">
            {Math.round(stat.weight / 4.3)} lbs
        </div>
    </div> */}

</div>)
    return (
        <div >
            {stats}
        </div>
    );
}
export default PokemonStats; 


// .map((stat)=>(
//     <div className="stats-table"  key={pokemonData.id}>
//             <div className="divTableRow">
//                 <div className="divTableCell">Pokedex#</div>
//                 <div className="divTableCell">{stat.pokedex_number}</div>
//             </div>

//             <div className="divTableRow">
//                 <div className="divTableCell">HP</div>
//                 <div className="divTableCell">❤️{stat.hp}</div>
//             </div>

//             <div className="divTableRow">
//                 <div className="divTableCell">Height</div>
//                 <div className="divTableCell">
//                     {Math.round(stat.height * 3.9 )+ `"`}
//                 </div>
//             </div>

//             <div className="divTableRow">
//                 <div className="divTableCell">Weight</div>
//                 <div className="divTableCell">
//                     {Math.round(stat.weight / 4.3)} lbs
//                 </div>
//             </div>
        
//         </div>
//     ))