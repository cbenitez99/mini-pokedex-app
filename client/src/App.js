import {useState} from "react"
import { Routes, Route } from "react-router-dom";
import AddPokemonForm from "./components/AddPokemonForm";
// import PokemonEditForm from "./components/PokemonEditForm";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PokemonContainer from "./containers/PokemonContainer";
import UsersContainer from "./containers/UsersContainer";
// import axios from "axios";


const App = () => {
  const [user, setUser] = useState({})
  // const [pokemonData, setPokemonData] = useState([])
  // const [pokemon, setPokemon] = useState("pikachu");
  // const [pokemonData, setPokemonData] = useState([]);
  // const [pokemonType, setPokemonType] = useState("");

  // const getPokemon = async () => {
  //   const toArray = [];
  //   try {
  //     const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  //     const res = await axios.get(url);
  //     toArray.push(res.data);
  //     setPokemonType(res.data.types[0].type.name.toUpperCase());
  //     setPokemonData(toArray);
  //     console.log(pokemonData)
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  
  return (
    <div>
      <Navbar user={user} setUser={setUser}/>
      <main>
        <Routes>
          <Route exact path="/pokemons/new" element={<AddPokemonForm user={user}/>}></Route>
          {/* <Route exact path="/pokemons/:id/edit" element={<PokemonEditForm />}></Route> */}
          <Route exact path="/pokemons" element={<PokemonContainer/>}></Route>
          <Route exact path="/login" element={<LoginForm setUser={setUser}/>}></Route>
          <Route exact path="/signup" element={<SignupForm setUser={setUser}/>}></Route>
          <Route exact path="/" element={<Home/>} ></Route>
          <Route exact path="users/*" element={<UsersContainer user={user}/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
