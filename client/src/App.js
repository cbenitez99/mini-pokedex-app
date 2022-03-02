import { useState } from "react"
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PokemonInfo from "./components/PokemonInfo";
import FindPokemon from "./components/FindPokemon";
import TrainerProfile from "./components/TrainerProfile";

const App = () => {
  const [user, setUser] = useState({});

  const [pokemonData, setPokemonData] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState("")
  const [pokemonName, setPokemonName] = useState("")
  const [pokemonType, setPokemonType] = useState("");
  const [pokemonUrl, setPokemonUrl] = useState("");
  const [formData, setFormData] = useState({
    name: pokemonName,
    types: pokemonType,
    image: pokemonUrl,
    user_id: user.id
  });
  const [moves, setMoves] = useState([]);

  const getPokemon = async () => {
    try {
        const toArray = [];
        const url = `https://pokeapi.co/api/v2/pokemon/${currentPokemon}`;
        const res = await axios.get(url);
        setPokemonName(res.data.name.toUpperCase());
        setPokemonType(res.data.types.map((type)=>type.type.name.toUpperCase()).join(" / "))
        setPokemonUrl(res.data.sprites["front_default"])
        setMoves(res.data.moves)
        toArray.push(res.data)
        setPokemonData(toArray)
    }catch (e) {
        console.log("Invalid Name/ID");
    }
  };    

  const handleChange = (e) => {
    setCurrentPokemon(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
    setFormData({
      name: pokemonName,
      types: pokemonType,
      image: pokemonUrl,
      user_id: user.id})
  };
  

  return (
    <div className="pokedex">
      <Navbar user={user} setUser={setUser}/>
      <main>
        <Routes>
          <Route exact path="/pokemons/:id/info" element={<PokemonInfo moves={moves} user={user}/>}/>
          <Route exact path="/find-pokemon" element={<FindPokemon user={user} moves={moves} pokemonData={pokemonData}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formData={formData}
          />}/>
          <Route exact path="/login" element={<LoginForm setUser={setUser}/>}/>
          <Route exact path="/signup" element={<SignupForm setUser={setUser}/>}/>
          <Route exact path="/" element={<Home user={user}/>}/>
          <Route exact path={`/users/${user.id}`} element={<TrainerProfile user={user}/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;