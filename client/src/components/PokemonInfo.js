import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';

const PokemonInfo = ({user, pokemonData, setPokemonData}) => {
    const {id} = useParams();

    // const [pokemonData, setPokemonData] = useState([]);
    useEffect(() => {
        fetch(`/pokemons/${id}`)
        .then((resp) => (resp.json()))
        .then(data => {
            setPokemonData(data)
        })
    }, [user.id, id, setPokemonData])

    const shuffled = moves.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 4);
    let new_moves = selected.map((move) => (<li key={id}>{move}</li>))

    if(!!moves) {
        return (
        <div className="info-container" key={id}>
            <h1>{pokemonData.name}</h1>
            <h1>{pokemonData.types}</h1> 
            <ol>{new_moves}</ol>
            <img src={pokemonData.image} alt={`No pic of ${pokemonData.name}!`}/> 
        </div> 
        );
    } else {
        return (
        <div className="info-container" key={id}>
            <h1>No Data to show</h1>
        </div>   
        );
    }
}

export default PokemonInfo;
