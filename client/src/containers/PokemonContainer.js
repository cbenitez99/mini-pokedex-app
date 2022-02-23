// import React, {useState} from 'react';
// import FindPokemon from '../components/FindPokemon';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function PokemonContainer ({user}) {
//     let navigate = useNavigate();
//     const [pokemon, setPokemon] = useState("");
//     const [pokemonData, setPokemonData] = useState([]);
//     const [pokemonName, setPokemonName] = useState("")
//     const [pokemonType, setPokemonType] = useState("");
//     const [pokemonUrl, setPokemonUrl] = useState("");
//     const [errors, setErrors] = useState([]);
//     const [formData, setFormData] = useState({
//         name: pokemonName,
//         types: pokemonType,
//         url: pokemonUrl,
//         user_id: user.id
//     });

//     const getPokemon = async () => {
//         try {
//             const toArray = [];
//             const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
//             const res = await axios.get(url);
//             toArray.push(res.data);
//             setPokemonName(res.data.name.toUpperCase());
//             setPokemonType(res.data.types.map((type)=>type.type.name.toUpperCase()).join(" / "))
//             setPokemonUrl(res.data.sprites["front_default"])
//             setPokemonData(toArray)
//         } catch (e) {
//             alert("Pokemon does not exist!");
//         }
//     };


//     const handleAddChange = (e) => {
//         setFormData(prev => {
//             return { ...prev, 
//                 [e.target.name]: e.target.value
//             }
//         })
//     };   

//     const handleAddSubmit = (e) => {
//         e.preventDefault()
//         let params = {
//           ...formData  
//         }
//         fetch("/pokemons", {
//             method: "POST",
//             headers: {
//                 "Accept": "application/json",
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(params)
//         })
//         .then(resp => {
//             if(resp.ok){
//                 resp.json()
//                 .then((json) => {
//                     navigate(`/users/${user.id}`)
//                 })
//             } else {
//                 resp.json()
//                 .then((json) => {
//                     setErrors(json.errors)
//                 });
//             }
//         });
//     };

//     return (
//         <div className='find-pokemon-page'>
//             <FindPokemon getPokemon={getPokemon} setPokemon={setPokemon} pokemonData={pokemonData} pokemonType={pokemonType}/>
//             <form className="pokemon-form" onSubmit={handleAddSubmit}>
//                 <input type="text" onChange={handleAddChange} name="name" value={pokemonName}/>
//                 <br/>
//                 <input type="text"  onChange={handleAddChange} name="type" value={pokemonType}/>
//                 <br/>
//                 <input type="text"  onChange={handleAddChange} name="url" value={pokemonUrl}/>
//                 <br/>
//                 <button type="submit">Capture</button>
//                 <p style={{color: "black"}}>{errors.join(",  ")}</p>
//             </form>
//         </div>
//     );
// }

// export default PokemonContainer;
