import {useEffect, useState} from "react"
import { Routes, Route, useNavigate } from "react-router-dom";
import FindPokemon from "./components/FindPokemon";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PokemonContainer from "./containers/PokemonContainer";
import UsersContainer from "./containers/UsersContainer";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState({});
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");
  const [caughtPokemon, setCaughtPokemon] = useState([]);

  let navigate = useNavigate();

  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then((resp)=> (resp.json()))
    .then((data) => {
      setCaughtPokemon(data.results)
    })
  },[user, pokemon])

 //////Recieve call from FindPokemon.js
  const handleChange = (e) => {
      setPokemon(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      getPokemon();
  };

  const getPokemon = async () => {
      const toArray = [];
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const res = await axios.get(url);
        toArray.push(res.data);
        setPokemonType(res.data.types[0].type.name.toUpperCase());
        setPokemonData(toArray);
      } catch (e) {
        console.log(e)
        alert("Pokemon does not exist!");
      }
  };

  const handleClick = (e) => {
    e.preventDefault()
    let mappedData = pokemonData.map((pokemon) => pokemon.name)
    alert( `You caught ${mappedData}!`)
    navigate(`/users/${user.id}`)
  }
/////////
  return (
    <div>
      <Navbar user={user} setUser={setUser}/>
      <main>
        <Routes>
          <Route exact path="/pokemons/new" element={
          <FindPokemon user={user} pokemonData={pokemonData} pokemonType={pokemonType} handleChange={handleChange} handleSubmit={handleSubmit} handleClick={handleClick}/>}/>
          <Route exact path="/pokemons" element={<PokemonContainer pokemonData={pokemonData}/>}></Route>
          <Route exact path="/login" element={<LoginForm setUser={setUser}/>}></Route>
          <Route exact path="/signup" element={<SignupForm setUser={setUser}/>}></Route>
          <Route exact path="/" element={<Home/>} ></Route>
          <Route exact path="users/*" element={<UsersContainer user={user} caughtPokemon={caughtPokemon}/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
