import "./App.css";
import { GameContextProvider } from "./context/gameContext";
import Game from "./components/game/game";

function App() {
  return (
    <GameContextProvider>
      <Game />
    </GameContextProvider>
  );
}

export default App;
