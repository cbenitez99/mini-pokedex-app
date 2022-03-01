import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

const PokemonInfo = ({user}) => {
    const {id} = useParams();

    const [pokemonData, setPokemonData] = useState([]);
    useEffect(() => {
        try {
        fetch(`/pokemons/${id}`)
        .then((resp) => (resp.json()))
        .then(data => {
            setPokemonData(data)
        })
        } catch (e){
            console.log(e)
        }
    }, [user.id, id])


    return (
        <div className="info-container" key={id}>
            <h1>{pokemonData.name}</h1>
            <h1>{pokemonData.types}</h1> 
            <img src={pokemonData.image} alt={`No pic of ${pokemonData.name}!`}/> 
        </div>        
    );
}

export default PokemonInfo;
