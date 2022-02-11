import React from 'react'


const PokemonContainer = ({caughtPokemon}) => {
    // useEffect(() => {
    //     fetch("/pokemons")
    //     .then((resp) => (resp.json()))
    //     .then(data => console.log(data))
    // }, [])
    let mappedData = caughtPokemon.map((pokemon) => pokemon.name)
    // alert( `You caught ${mappedData}!`)
  return (
      <div>
        {console.log(mappedData)}
      </div>
  )
}

export default PokemonContainer;
