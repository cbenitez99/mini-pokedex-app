import React from 'react'
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({handleDelete, userPokemon}) => {
  let navigate = useNavigate();
  const sortedPokemon = userPokemon.sort(function(a, b) {
    let nameA = a.name;
    let nameB = b.name;
    return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
  });

  return (
    <div className='pokemon-container'>
        {sortedPokemon.map((pokemon) => (
          <div className='pokemon-card' key={pokemon.id}>
            <h5 className='pokemon-name'>{pokemon.name} ◓</h5>
            <img className="party-sprites" src={pokemon.image} alt={pokemon.name}/>
            <button className='release-button' onClick={() => handleDelete(pokemon.id)}>Release</button>
            <button className='stats-button' onClick={() => navigate(`/pokemons/${pokemon.id}/info`)}>More Info</button>
          </div>
        ))}

    </div>
  );
}

export default PokemonCard;

// objArray.sort(function(a, b) {
//   var textA = a.DepartmentName.toUpperCase();
//   var textB = b.DepartmentName.toUpperCase();
//   return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
// });