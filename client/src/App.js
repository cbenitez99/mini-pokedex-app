import React, { useState, createContext } from "react"
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/UserForms/LoginForm";
import SignupForm from "./components/UserForms/SignupForm";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PokemonInfo from "./components/PokemonInfo";
import FindPokemon from "./components/PokemonForms/FindPokemon"
import TrainerProfile from "./components/TrainerProfile";
import EditPokemon from "./components/PokemonForms/EditPokemon";

export const AppContext = createContext(null);

const App = () => {
  const [user, setUser] = useState({});

  return (
    <AppContext.Provider value={{user, setUser}} className="pokedex">
      <Navbar user={user} setUser={setUser}/>
      <main>
        <Routes>
          <Route exact path="/pokemons/:id/edit" element={<EditPokemon/>}/>
          <Route exact path="/pokemons/:id/info" element={<PokemonInfo user={user}/>}/>
          <Route exact path="/find-pokemon" element={<FindPokemon user={user}/>}/>
          <Route exact path="/login" element={<LoginForm/>}/>
          <Route exact path="/signup" element={<SignupForm/>}/>
          <Route exact path="/" element={<Home user={user}/>}/>
          <Route exact path={`/users/${user.id}`} element={<TrainerProfile user={user}/>}/>
        </Routes>
      </main>
    </AppContext.Provider>
  );
};

export default App;