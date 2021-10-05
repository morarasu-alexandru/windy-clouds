import { useCallback, useState } from "react";

const initialLives = 12;

export const usePlayerStats = () => {
  const [points, setPoints] = useState(0);
  const [lives, setLives] = useState(initialLives);

  const resetPoints = useCallback(() => {
    setPoints(0);
  }, []);

  const resetLives = useCallback(() => {
    setLives(initialLives);
  }, []);

  const incrementPoints = useCallback((value) => {
    setPoints((currentValue) => currentValue + value);
  }, []);

  const decreaseOneLive = useCallback(() => {
    setLives((currentValue) => currentValue - 1);
  }, []);

  return {
    points,
    lives,
    incrementPoints,
    resetPoints,
    resetLives,
    decreaseOneLive,
  };
};
