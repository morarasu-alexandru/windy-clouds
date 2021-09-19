import { useCallback, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialClouds = [
  "html",
  "css",
  "javascript",
  "responsive design",
  "react",
];

const generateRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

const initialTimeout = 1500;

export const useClouds = () => {
  const [cloudsStock, setCloudsStock] = useState(initialClouds);
  const [activeClouds, setActiveClouds] = useState([]);
  const [isGeneratingClouds, setIsGeneratingClouds] = useState(false);
  const intervalRef = useRef(null);
  const [timeout, setTimeout] = useState(initialTimeout);

  const generateRandomCloud = useCallback(() => {
    const randomIndex = generateRandomNumber(cloudsStock.length - 1);
    const cloudLabel = cloudsStock[randomIndex];

    if (cloudsStock.length === 1) {
      setCloudsStock(initialClouds);
    } else {
      setCloudsStock(cloudsStock.filter((elem) => elem !== cloudLabel));
    }

    const newCloud = {
      label: cloudLabel,
      id: uuidv4(),
      styleTop: generateRandomNumber(400),
    };

    setActiveClouds((currentVal) => [...currentVal, newCloud]);
  }, [cloudsStock]);

  useEffect(() => {
    if (isGeneratingClouds) {
      intervalRef.current = setInterval(() => {
        generateRandomCloud();
      }, timeout);
    }

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [generateRandomCloud, isGeneratingClouds, timeout]);

  const startGenerateClouds = useCallback(() => {
    setIsGeneratingClouds(true);
  }, []);

  const stopGenerateClouds = useCallback(() => {
    setIsGeneratingClouds(false);
  }, []);

  const resetClouds = useCallback(() => {
    setCloudsStock(initialClouds);
    setActiveClouds([]);
    setIsGeneratingClouds(false);
    intervalRef.current = null;
    clearInterval(intervalRef.current);
    setTimeout(initialTimeout);
  }, []);

  const destroyCloud = useCallback(
    (value, cb) => {
      if (activeClouds.some((elem) => elem.label === value)) {
        setActiveClouds(activeClouds.filter((elem) => elem.label !== value));
        cb();
      }
    },
    [activeClouds]
  );

  return {
    resetClouds,
    startGenerateClouds,
    stopGenerateClouds,
    destroyCloud,
    activeClouds,
  };
};
