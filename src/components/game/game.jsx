import React, { useContext, useMemo } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import StartModal from "../startModal/startModal";
import EndModal from "../endModal/endModal";
import TimeLabel from "../timeLabel/timeLabel";
import CloudsSection from "../cloudsSection/cloudsSection";
import { GameContext } from "../../context/gameContext";
import { WIND_SPEED } from "../../customHooks/clouds";
import { GAME_FAZE } from "../../utils/constants";
import style from "./game.module.scss";
import Cloud from "../cloudsSection/cloud";

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

  const testCloud = useMemo(
    () => ({
      label: "test",
      id: "random",
      style: Math.floor(Math.random() * 500),
      lifetime: 60000,
      pointsMultiplier: 10,
    }),
    []
  );
  return (
    <main className={style.GameBoard}>
      <StartModal />
      <EndModal />

      <header className={style.header}>
        <section className={style.timeSection}>
          Time: <TimeLabel value={minutes} /> : <TimeLabel value={seconds} />
        </section>
        <section className={style.speedControlSection}>
          <div className={style.sliderText}>Wind speed</div>
          <div className={style.slider}>
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
                classes={{
                  root: style.slider,
                }}
              />
            </Box>
          </div>
        </section>
        <section className={style.statsSection}>
          <span className={style.statsPoints}>Points: {points}</span>
          <span className={style.statsLives}>Lives: {lives}</span>
        </section>
        {gameFaze === GAME_FAZE.runningGame && (
          <button className={style.button} onClick={handleStopGame}>
            Stop Game
          </button>
        )}
      </header>

      <CloudsSection />
      <div style={{ marginLeft: "190px" }}>
        <Cloud
          cloud={testCloud}
          decreaseOneLive={() => {}}
          autoDestroyCloud={() => {}}
        />
      </div>
      <div className={style.inputContainer}>
        <label className={style.inputLabel} htmlFor="playerText">
          Cloud name:{" "}
        </label>
        <input
          id="playerText"
          className={style.inputField}
          type="text"
          value={playerText}
          onChange={handlePlayerTextChange}
          onKeyPress={handleKeyPress}
          autoComplete="off"
        />
      </div>
    </main>
  );
};

export default Game;
