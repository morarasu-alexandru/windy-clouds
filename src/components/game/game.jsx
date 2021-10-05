import React, { useContext, useMemo, useRef } from "react";
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
import FavoriteIcon from "@mui/icons-material/Favorite";

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

  const inputRef = useRef(null);

  return (
    <main className={style.GameBoard}>
      <StartModal inputRef={inputRef} />
      <EndModal inputRef={inputRef} />

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
          <span className={style.statsLives}>
            <span className={style.statsLivesLabel}>Lives:</span>
            {lives < 13 ? (
              <>
                {[...Array(lives)].map((e, i) => {
                  return (
                    <FavoriteIcon classes={{ root: style.favoriteIcon }} />
                  );
                })}
              </>
            ) : (
              <span> {lives}</span>
            )}
          </span>
        </section>
        {gameFaze === GAME_FAZE.runningGame && (
          <button className={style.button} onClick={handleStopGame}>
            Stop Game
          </button>
        )}
      </header>

      <CloudsSection />

      <div className={style.inputContainer}>
        <label className={style.inputLabel} htmlFor="playerText">
          Cloud name:{" "}
        </label>
        <input
          autoFocus
          ref={inputRef}
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
