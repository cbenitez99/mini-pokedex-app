import {useState} from "react"
import axios from "axios"
import "./App.css"
// import { Routes, Route } from "react-router-dom";
// import PokemonContainer from "./components/PokemonContainer";
// import AddPokemonForm from "./components/AddPokemonForm";
// import TrainersContainer from "./components/TrainersContainer";
// import PokemonEditForm from "./components/PokemonEditForm";
// import LoginForm from "./components/LoginForm";
// import SignupForm from "./components/SignupForm";
// import Home from "./components/Home";
// import Navbar from "./components/Navbar";

const App = () => {
  // const [user, setUser] = useState(null)
  // // const [pokemon, setPokemon] = useState("pikachu")
  // // const [pokemonData, setPokemonData] = useState([])
  // // const [pokemonType, setPokemonType] = useState("")
  // // // const [pokemonSprite, setPokemonSprite] = useState("")

  // // const getPokemon = async () => {
  // //   const toArray = [];
  // //   try {
  // //     const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  // //     const res = await axios.get(url);
  // //     // toArray.push(res.data);
  // //     // setPokemonType(res.data.types[0].type.name)
  // //     console.log(res)
  // //   } catch (e) {
  // //     console.log(e);
  // //   }
  // // };

  // // const handleChange = () => {
  // //   setPokemon(e.target.value.toLowerCase())
  // // }

  // // const handleSubmit = (e) => {
  // //   e.preventDefault();
  // //   getPokemon()
  // // }

  // // useEffect(()=>{
  // //   getPokemon();
  // // }, [])
  // return (
  //   <div>
  //     <Navbar user={user}/>
  //     <main>
  //        <Routes>
  //           <Route path="/pokemons/new" element={<AddPokemonForm user={user}/>}></Route>
  //           <Route exact path="/pokemons/:id/edit" element={<PokemonEditForm />}></Route>
  //           <Route exact path="/trainers" element={<TrainersContainer/>}></Route>
  //           <Route exact path="/pokemons" element={<PokemonContainer/>}></Route>
  //           <Route exact path="/login" element={<LoginForm setUser={setUser}/>}></Route>
  //           <Route exact path="/signup" element={<SignupForm setUser={setUser}/>}></Route>
  //           <Route exact path="/" element={<Home/>} ></Route>
  //         </Routes>
  //     </main>
  //   </div>
  // );
  const [pokemon, setPokemon] = useState("pikachu");
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonType, setPokemonType] = useState("");

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
          setPokemonType(res.data.types[0].type.name);
          setPokemonData(toArray);
        } catch (e) {
          console.log(e);
        }
    };
    // console.log(pokemonData);

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                    type="text"
                    onChange={handleChange}
                    placeholder="enter pokemon name"
                    />
                </label>
            </form>
        {pokemonData.map((data) => {
        return (
            <div className="container">
                <img src={data.sprites["front_default"]} alt="poke-sprite"/>
                <div className="divTable">
                    <div className="divTableBody">
                        <div className="divTableRow">
                            <div className="divTableCell">Type</div>
                            <div className="divTableCell">{pokemonType}</div>
                        </div>

                      <div className="divTableRow">
                          <div className="divTableCell">Height</div>
                          <div className="divTableCell">
                              {" "}
                              {Math.round(data.height * 3.9)}"
                          </div>
                      </div>

                      <div className="divTableRow">
                          <div className="divTableCell">Weight</div>
                          <div className="divTableCell">
                              {" "}
                              {Math.round(data.weight / 4.3)} lbs
                          </div>
                      </div>

                      <div className="divTableRow">
                          <div className="divTableCell">Number of Battles</div>
                          <div className="divTableCell">{data.game_indices.length}</div>
                      </div>
                    </div>
                </div>
            </div>
        );
        })}
        </div>
    );
}

export default App;
