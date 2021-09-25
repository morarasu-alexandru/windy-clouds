import "./App.css";
import { useCallback, useEffect, useState } from "react";
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

function valuetext(value) {
  return `${value}°C`;
}

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
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
    setIsGameStarted(true);
    startTimer();
    startGenerateClouds();
  }, [startGenerateClouds, startTimer]);

  const handleResetGame = useCallback(() => {
    stopTimer();
    stopGenerateClouds();
    setIsGameStarted(false);
    resetTimer();
    resetClouds();
    resetLives();
    resetPoints();
  }, [
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

  console.log("activeClouds: ", activeClouds);

  return (
    <main className="GameBoard">
      <StartModal
        isGameStarted={isGameStarted}
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
              getAriaValueText={valuetext}
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

      {isGameStarted && <button onClick={handleResetGame}>Stop Game</button>}

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
