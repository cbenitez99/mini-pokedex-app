import { useState } from "react"
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PokemonInfo from "./components/PokemonInfo";
import FindPokemon from "./components/FindPokemon";
import TrainerProfile from "./components/TrainerProfile";
// import axios from "axios";
//, useNavigate

const App = () => {
  const [user, setUser] = useState({});
  // let navigate = useNavigate(); 
  // const [errors, setErrors] = useState([]);
  // const [pokemonData, setPokemonData] = useState([]);
  // const [currentPokemon, setCurrentPokemon] = useState("")
  // const [pokemonName, setPokemonName] = useState("")
  // const [pokemonType, setPokemonType] = useState("");
  // const [pokemonUrl, setPokemonUrl] = useState("");
  // // const [moves, setMoves] = useState([]);
  // const [stats, setStats] = useState({});
  // const [formData, setFormData] = useState({
  //   name: "",
  //   poke_type: "",
  //   image: "",
  //   user_id: user.id
  // });

  // const getPokemon = async () => {
  //   try {
  //     const toArray = [];
  //     const url = `https://pokeapi.co/api/v2/pokemon/${currentPokemon}`;
  //     const res = await axios.get(url);
  //     setPokemonName(res.data.name.toUpperCase());
  //     setPokemonType(res.data.types.map((type) => type.type.name.toUpperCase()).join(" / "));
  //     setPokemonUrl(res.data.sprites["front_default"]);
  //     toArray.push(res.data);
  //     setPokemonData(toArray);
  //     setFormData({
  //       name: pokemonName,
  //       poke_type: pokemonType,
  //       image: pokemonUrl,
  //       user_id: user.id,
  //     })
  //   } catch (e) {
  //     console.log("Invalid Name/ID");
  //   }
  // }    
  
  // const getPokemon = () => {
  //   fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemon}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       setStats(data)
  //       setPokemonName(data.name.toUpperCase())
  //       setPokemonType(data.types.map((type) => type.type.name.toUpperCase()).join(" / "));
  //       setPokemonUrl(data.sprites["front_default"])
  //     });
  // };
  // //enter key twice for it to work?
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   getPokemon();
  // };

  // //capture button
  // function handleCapture(e) {
  //   e.preventDefault();
  //   let params = {
  //       ...formData
  //   };
  //   fetch("/pokemons", {
  //     method: "POST",
  //     headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(params)
  //   })
  //   .then(resp => {
  //     if (resp.ok) {
  //       resp.json()
  //       .then((json) => {
  //         console.log(json.moves);
  //         alert("Nice Catch!");
  //         navigate(`/users/${user.id}`);
  //       });
  //     } else {
  //       resp.json()
  //       .then((json) => {
  //       console.log(json);
  //       setErrors(json.errors);
  //       });
  //     }
  //   });
  // }

  return (
    <div className="pokedex">
      <Navbar user={user} setUser={setUser}/>
      <main>
        <Routes>
          <Route exact path="/pokemons/:id/info" element={<PokemonInfo/>}/>
          <Route exact path="/find-pokemon" element={<PokemonContainer user={user}/>}/>
          <Route exact path="/login" element={<LoginForm setUser={setUser}/>}/>
          <Route exact path="/signup" element={<SignupForm setUser={setUser}/>}/>
          <Route exact path="/" element={<Home user={user}/>}/>
          <Route exact path={`/users/${user.id}`} element={<TrainerProfile user={user}/>}/>
        </Routes>
      </main>
    </div>
  );
}
 
// stats={stats}
// handleCapture={handleCapture} 
// handleSubmit={handleSubmit} 
// errors={errors}
// setCurrentPokemon={setCurrentPokemon}

// setPokemonData={setPokemonData} pokemonData={pokemonData} user={user}


export default App;