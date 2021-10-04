import "./style.scss";
import { GameContextProvider } from "./context/gameContext";
import Game from "./components/game/game";
import "./style.scss";

function App() {
  return (
    <GameContextProvider>
      <Game />
    </GameContextProvider>
  );
}

export default App;
