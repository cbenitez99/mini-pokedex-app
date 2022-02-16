import { useState } from "react"
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PokemonContainer from "./containers/PokemonContainer";
import UsersContainer from "./containers/UsersContainer";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState({});
  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");
  const toArray = [];

 //////Recieve call from FindPokemon.js
  const handleChange = (e) => {
      setPokemon(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      getPokemon();
  };

  const getPokemon = async () => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const res = await axios.get(url);
        toArray.push(res.data);
        setPokemonType(res.data.types[0].type.name.toUpperCase());
        setPokemonData(toArray)
      } catch (e) {
        alert("Pokemon does not exist!");
      }
  };

  return (
    <div>
      <Navbar user={user} setUser={setUser}/>
      <main>
        <Routes>
          <Route exact path="/find-pokemon" element={<PokemonContainer user={user} pokemonData={pokemonData} 
            pokemonType={pokemonType} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
           />}></Route>
          <Route exact path="/login" element={<LoginForm setUser={setUser}/>}></Route>
          <Route exact path="/signup" element={<SignupForm setUser={setUser}/>}></Route>
          <Route exact path="/" element={<Home user={user}/>} ></Route>
          <Route exact path="users/*" element={<UsersContainer user={user}/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
