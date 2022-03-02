import { useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PokemonInfo from "./components/PokemonInfo";
import FindPokemon from "./components/FindPokemon";
import TrainerProfile from "./components/TrainerProfile";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState({});
  let navigate = useNavigate(); 
  const [errors, setErrors] = useState([]);
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
      setPokemonType(res.data.types.map((type) => type.type.name.toUpperCase()).join(" / "));
      setPokemonUrl(res.data.sprites["front_default"]);
      setMoves(res.data.moves)
      toArray.push(res.data);
      setPokemonData(toArray);
      setFormData({
        name: pokemonName,
        types: pokemonType,
        image: pokemonUrl,
        user_id: user.id
      })
    } catch (e) {
      console.log("Invalid Name/ID");
    }
  }    
  
  //enter key twice for it to work?
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };

  const setPokemon = () => {
    setFormData({
      name: pokemonName,
      types: pokemonType,
      image: pokemonUrl,
      user_id: user.id
    });
  }

  //capture button
  function handleCapture(e) {
    e.preventDefault();
    setPokemon();
    let params = {
        ...formData
    };
    fetch("/pokemons", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    })
    .then(resp => {
      if (resp.ok) {
        resp.json()
        .then((json) => {
          console.log(json);
          alert("Nice Catch!");
          navigate(`/users/${user.id}`);
        });
      } else {
        resp.json()
        .then((json) => {
        console.log(json);
        setErrors(json.errors);
        });
      }
    });
  }

  return (
    <div className="pokedex">
      <Navbar user={user} setUser={setUser}/>
      <main>
        <Routes>
          <Route exact path="/pokemons/:id/info" element={<PokemonInfo user={user} moves={moves}/>}/>
          <Route exact path="/find-pokemon" element={<FindPokemon 
          pokemonData={pokemonData}
          handleCapture={handleCapture} 
          handleSubmit={handleSubmit} 
          errors={errors}
          setCurrentPokemon={setCurrentPokemon}/>}/>
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