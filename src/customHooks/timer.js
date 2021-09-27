import { useCallback, useEffect, useRef, useState } from "react";

export const useTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = useCallback(() => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setSeconds((currentVal) => {
          return currentVal + 1;
        });
      }, 1000);
    }
  }, []);

  const stopTimer = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  const resetTimer = useCallback(() => {
    setSeconds(0);
    setMinutes(0);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  useEffect(() => {
    if (seconds === 60) {
      setSeconds(0);
      setMinutes((currentValue) => currentValue + 1);
    }
  }, [seconds]);

  return {
    seconds,
    minutes,
    startTimer,
    stopTimer,
    resetTimer,
  };
};
