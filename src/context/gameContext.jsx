import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useClouds } from "../customHooks/clouds";
import { GAME_FAZE } from "../utils/constants";
import { useTimer } from "../customHooks/timer";
import { usePlayerStats } from "../customHooks/playerStats";
import { ENTER_KEY } from "../customHooks/keyPress";
import debounce from "lodash/debounce";

export const GameContext = createContext();

const { Provider } = GameContext;

export const GameContextProvider = (props) => {
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
  }, [handleStopGame, lives]);

  const value = useMemo(
    () => ({
      isStartModalOpen,
      isEndModalOpen,
      startGenerateClouds,
      stopGenerateClouds,
      activeClouds,
      resetClouds,
      destroyCloudByLabel,
      destroyCloudById,
      windSpeed,
      changeWindSpeed,
      changeCloudGeneratorCadence,
      finalPoints,
      minutes,
      seconds,
      handleWindSpeedChange,
      points,
      lives,
      gameFaze,
      handleStopGame,
      handleDestroyCloud,
      decreaseOneLive,
      playerText,
      handlePlayerTextChange,
      handleKeyPress,
      handleStartGame,
    }),
    [
      isStartModalOpen,
      isEndModalOpen,
      startGenerateClouds,
      stopGenerateClouds,
      activeClouds,
      resetClouds,
      destroyCloudByLabel,
      destroyCloudById,
      windSpeed,
      changeWindSpeed,
      changeCloudGeneratorCadence,
      finalPoints,
      minutes,
      seconds,
      handleWindSpeedChange,
      points,
      lives,
      gameFaze,
      handleStopGame,
      handleDestroyCloud,
      decreaseOneLive,
      playerText,
      handlePlayerTextChange,
      handleKeyPress,
      handleStartGame,
    ]
  );

  return <Provider value={value}>{props.children}</Provider>;
};
