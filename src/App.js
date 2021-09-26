import "./App.css";
import { useCallback, useEffect, useMemo, useState } from "react";
import TimeLabel from "./components/timeLabel/timeLabel";
import { useTimer } from "./customHooks/timer";
import CloudsSection from "./components/cloudsSection/cloudsSection";
import { useClouds, WIND_SPEED } from "./customHooks/clouds";
import { usePlayerStats } from "./customHooks/playerStats";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import debounce from "lodash/debounce";
import { ENTER_KEY } from "./customHooks/keyPress";
import StartModal from "./components/startModal/startModal";
import { GAME_FAZE } from "./utils/constants";
import EndModal from "./components/endModal/endModal";

function App() {
  const [gameFaze, setGameFaze] = useState(GAME_FAZE.startGame);
  const { seconds, minutes, startTimer, resetTimer, stopTimer } = useTimer();
  const {
    startGenerateClouds,
    stopGenerateClouds,
    activeClouds,
    resetClouds,
    destroyCloudByLabel,
    destroyCloudById,
    windSpeed,
    changeWindSpeed,
    changeCloudGeneratorCadence,
  } = useClouds();
  const [playerText, setPlayerText] = useState("");
  const [finalPoints, setFinalPoints] = useState(null);
  const {
    points,
    incrementPoints,
    resetPoints,
    lives,
    resetLives,
    decreaseOneLive,
  } = usePlayerStats();

  const handlePlayerTextChange = useCallback((event) => {
    setPlayerText(event.target.value);
  }, []);

  const handleKeyPress = useCallback(
    (event) => {
      if (event.which === ENTER_KEY) {
        if (activeClouds.some((elem, idx) => elem.label === playerText)) {
          const cloud = activeClouds.find(
            (cloud) => cloud.label === playerText
          );
          incrementPoints(playerText.length * cloud.pointsMultiplier);
          destroyCloudByLabel(playerText);
          setPlayerText("");
        }
      }
    },
    [activeClouds, destroyCloudByLabel, incrementPoints, playerText]
  );

  const handleStartGame = useCallback(() => {
    setGameFaze(GAME_FAZE.runningGame);
    startTimer();
    startGenerateClouds();
    setFinalPoints(null);
  }, [startGenerateClouds, startTimer]);

  const handleStopGame = useCallback(() => {
    stopTimer();
    setFinalPoints(points);
    stopGenerateClouds();
    setGameFaze(GAME_FAZE.endGame);
    resetTimer();
    resetClouds();
    resetLives();
    resetPoints();
  }, [
    points,
    resetClouds,
    resetLives,
    resetPoints,
    resetTimer,
    stopGenerateClouds,
    stopTimer,
  ]);

  const handleDestroyCloud = useCallback(
    (id) => {
      destroyCloudById(id);
    },
    [destroyCloudById]
  );

  const handleWindSpeedChange = debounce((event) => {
    changeWindSpeed(event.target.value);
  }, 40);

  useEffect(() => {
    changeCloudGeneratorCadence(minutes);
  }, [changeCloudGeneratorCadence, minutes]);

  const isStartModalOpen = useMemo(() => {
    return gameFaze === GAME_FAZE.startGame;
  }, [gameFaze]);

  const isEndModalOpen = useMemo(() => {
    return gameFaze === GAME_FAZE.endGame;
  }, [gameFaze]);

  useEffect(() => {
    if (lives === 0) {
      handleStopGame();
    }
  }, [lives]);

  return (
    <main className="GameBoard">
      <StartModal isOpen={isStartModalOpen} handleStartGame={handleStartGame} />
      <EndModal
        isOpen={isEndModalOpen}
        points={finalPoints}
        handleStartGame={handleStartGame}
      />

      <section className="TimeSection">
        Time: <TimeLabel value={minutes} /> : <TimeLabel value={seconds} />
      </section>
      <section className="SpeedControlSection">
        <div>Wind speed</div>
        <div>
          <Box sx={{ width: 200 }}>
            <Slider
              value={windSpeed}
              onChange={handleWindSpeedChange}
              aria-label="Temperature"
              defaultValue={WIND_SPEED.level1}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={WIND_SPEED.level1}
              max={WIND_SPEED.level3}
            />
          </Box>
        </div>
      </section>
      <section className="StatsSection">
        <span>Points: {points}</span>
        <span>Lives: {lives}</span>
      </section>

      {gameFaze === GAME_FAZE.runningGame && (
        <button onClick={handleStopGame}>Stop Game</button>
      )}

      <CloudsSection
        activeClouds={activeClouds}
        autoDestroyCloud={handleDestroyCloud}
        decreaseOneLive={decreaseOneLive}
      />

      <label htmlFor="playerText">Cloud name: </label>
      <input
        id="playerText"
        type="text"
        value={playerText}
        onChange={handlePlayerTextChange}
        onKeyPress={handleKeyPress}
        autoComplete="off"
      />
    </main>
  );
}

export default App;
