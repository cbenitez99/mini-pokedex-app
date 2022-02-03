import PokemonContainer from "./components/PokemonContainer";
import TrainersContainer from "./components/TrainersContainer";
function App() {
  // const [user, setUser] = useState([])
  return (
    <div className="App">
     <h1>Mini Poki-Dex!</h1>
     <PokemonContainer/>
     <TrainersContainer/>
    </div>
  );
}

export default App;
