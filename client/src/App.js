import { useState } from "react"
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PokemonContainer from "./containers/PokemonContainer";
import TrainerProfile from "./components/TrainerProfile";

const App = () => {
  const [user, setUser] = useState({});

  function selectFewerMoves(move){
    const {id, name} = move;
    return {id, name};
  }

  // const getPokemonMoves = (moves) => {
  //   setPokemonMoves(moves)
  // }

  return (
    <div className="pokedex">
      <Navbar user={user} setUser={setUser}/>
      <main>
        <Routes>
          <Route exact path="/find-pokemon" element={<PokemonContainer user={user}/>}>
          </Route>
          <Route exact path="/login" element={<LoginForm setUser={setUser}/>}></Route>
          <Route exact path="/signup" element={<SignupForm setUser={setUser}/>}></Route>
          <Route exact path="/" element={<Home user={user}/>} ></Route>
          <Route exact path={`/users/${user.id}`} element={<TrainerProfile user={user} selectFewerMoves={selectFewerMoves}/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;