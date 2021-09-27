import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import StartModal from "../startModal/startModal";
import EndModal from "../endModal/endModal";
import TimeLabel from "../timeLabel/timeLabel";
import CloudsSection from "../cloudsSection/cloudsSection";
import { GameContext } from "../../context/gameContext";
import { WIND_SPEED } from "../../customHooks/clouds";
import { GAME_FAZE } from "../../utils/constants";

const Game = () => {
  const {
    minutes,
    seconds,
    windSpeed,
    handleWindSpeedChange,
    points,
    lives,
    gameFaze,
    handleStopGame,
    playerText,
    handleKeyPress,
    handlePlayerTextChange,
  } = useContext(GameContext);
  return (
    <main className="GameBoard">
      <StartModal />
      <EndModal />

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

      <CloudsSection />

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
};

export default Game;
