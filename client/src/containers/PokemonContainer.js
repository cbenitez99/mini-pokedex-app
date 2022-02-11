import React from 'react'


const PokemonContainer = ({pokemonData}) => {
    // useEffect(() => {
    //     fetch("/pokemons")
    //     .then((resp) => (resp.json()))
    //     .then(data => console.log(data))
    // }, [])
    // let mappedData = pokemonData.map((pokemon) => pokemon.name)
    // alert( `You caught ${mappedData}!`)
  return (
      <div>
        {console.log(pokemonData)}
      </div>
  )
}

export default PokemonContainer;
