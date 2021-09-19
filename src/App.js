import "./App.css";
import { useCallback, useState } from "react";
import TimeLabel from "./components/timeLabel/timeLabel";
import { useTimer } from "./customHooks/timer";
import CloudsSection from "./components/cloudsSection/cloudsSection";
import { useClouds } from "./customHooks/clouds";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  let cb = () => {
    // console.log("tick: ");
  };
  const { seconds, minutes, startTimer, resetTimer, stopTimer } = useTimer(cb);
  const {
    startGenerateClouds,
    stopGenerateClouds,
    activeClouds,
    resetClouds,
    destroyCloud,
  } = useClouds();
  const [playerText, setPlayerText] = useState("");

  const handlePlayerTextChange = useCallback((event) => {
    setPlayerText(event.target.value);
  }, []);

  const handleClearPlayerText = useCallback(() => {
    setPlayerText("");
  });

  const handleKeyPress = useCallback((event) => {
    if (event.which === 13) {
      destroyCloud(playerText, handleClearPlayerText);
      console.log("hit enter: ");
    }
  });

  const handleStartGame = useCallback(() => {
    setIsGameStarted(true);
    startTimer();
    startGenerateClouds();
  }, [startGenerateClouds, startTimer]);

  const handleStopGame = useCallback(() => {
    stopTimer();
    stopGenerateClouds();
    setIsGameStarted(false);
  }, [stopGenerateClouds, stopTimer]);

  const handleResetGame = useCallback(() => {
    setIsGameStarted(false);
    stopGenerateClouds();
    resetTimer();
    resetClouds();
  }, [resetClouds, resetTimer, stopGenerateClouds]);

  return (
    <main className="GameBoard">
      <section className="TimeSection">
        Time: <TimeLabel value={minutes} /> : <TimeLabel value={seconds} />
      </section>
      <section className="SpeedControlSection">
        <div>Wind speed</div>
        <div>slider</div>
      </section>
      <section className="StatsSection">
        <span>Points: 20</span>
        <span>Lives: 3</span>
      </section>

      {isGameStarted ? (
        <button onClick={handleStopGame}>Stop Game</button>
      ) : (
        <>
          <button onClick={handleStartGame}>Start/Resume</button>
          <button onClick={handleResetGame}>Reset Game</button>
        </>
      )}

      <CloudsSection activeClouds={activeClouds} />

      <label htmlFor="playerText">Cloud name: </label>
      <input
        id="playerText"
        type="text"
        value={playerText}
        onChange={handlePlayerTextChange}
        onKeyPress={handleKeyPress}
      />
    </main>
  );
}

export default App;
