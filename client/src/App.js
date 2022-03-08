import { useState } from "react"
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PokemonInfo from "./components/PokemonInfo";
import FindPokemon from "./components/FindPokemon"
import TrainerProfile from "./components/TrainerProfile";

const App = () => {
  const [user, setUser] = useState({});

  return (
    <div className="pokedex">
      <Navbar user={user} setUser={setUser}/>
      <main>
        <Routes>
          <Route exact path="/pokemons/:id/info" element={<PokemonInfo user={user}/>}/>
          <Route exact path="/find-pokemon" element={<FindPokemon user={user}/>}/>
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