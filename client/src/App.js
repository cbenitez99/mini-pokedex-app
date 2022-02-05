import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from "react"
import PokemonContainer from "./components/PokemonContainer";
import AddPokemonForm from "./components/AddPokemonForm";
import TrainersContainer from "./components/TrainersContainer";
import PokemonEditForm from "./components/PokemonEditForm";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";

import Navbar from "./components/Navbar";
function App() {
  const [user, setUser] = useState(null)
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
            <Route exact path="/" element={<Home/>} ></Route>
          </Routes>
      </main>
    </div>
  );
}

export default App;
