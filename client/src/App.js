import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from "react"
import PokemonContainer from "./components/PokemonContainer";
import AddPokemonForm from "./components/AddPokemonForm";
import TrainersContainer from "./components/TrainersContainer";
import PokemonEditForm from "./components/PokemonEditForm";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import axios from "axios"

const App = () => {
  const [user, setUser] = useState(null)
  const [pokemon, setPokemon] = useState("bulbasaur")
  const [pokemonData, setPokemonData] = useState([])
  const [pokemonType, setPokemonType] = useState("")

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name)
      console.log(res)
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <Navbar user={user}/>
      <main>
         <Routes>
            <Route path="/pokemons/new" element={<AddPokemonForm user={user}/>}></Route>
            <Route exact path="/pokemons/:id/edit" element={<PokemonEditForm />}></Route>
            <Route exact path="/trainers" element={<TrainersContainer/>}></Route>
            <Route exact path="/pokemons" element={<PokemonContainer/>}></Route>
            <Route exact path="/login" element={<LoginForm setUser={setUser}/>}></Route>
            <Route exact path="/signup" element={<SignupForm setUser={setUser}/>}></Route>
            <Route exact path="/" element={<Home/>} ></Route>
          </Routes>
      </main>
    </div>
  );
}

export default App;
