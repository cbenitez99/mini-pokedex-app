// import React, {useState} from 'react';
// import FindPokemon from '../components/FindPokemon';
// // import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function PokemonContainer ({user}) {
//     // let navigate = useNavigate();
//     const [pokemon, setPokemon] = useState("");
//     const [pokemonData, setPokemonData] = useState([]);
//     const [errors, setErrors] = useState([]);
//     const [formData, setFormData] = useState({
//         name: "",
//         poke_type: "",
//         image: "",
//         user_id: user.id,
//     });

//     const getPokemon = async () => {
//         try {
//             const toArray = [];
//             const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
//             const res = await axios.get(url);
//             toArray.push(res.data);
//             setFormData({
//                 name: res.data.name.toUpperCase(),
//                 poke_type: res.data.types.map((type) => type.type.name.toUpperCase()).join(" / "),
//                 image: res.data.sprites["front_default"],
//                 user_id: user.id
//             });
//             setPokemonData(toArray)
//             setPokemon(res.data.name)
//         } catch (e) {
//             setErrors(e)
//             // alert("Pokemon does not exist!");
//             console.log(errors)
//         }
     
//     };


   
//     return (
//         <FindPokemon pokemonData={pokemonData} formData={formData} getPokemon={getPokemon} user={user}/>
//     );
// }

// export default PokemonContainer;
