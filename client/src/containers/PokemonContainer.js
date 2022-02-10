import React, { useEffect } from 'react'

export default function PokemonContainer() {
    useEffect(() => {
        fetch("/pokemons")
        .then((resp) => (resp.json()))
        .then(data => console.log(data))
    }, [])
  return (
    <div>List owned pokemon here!</div>
  )
}
