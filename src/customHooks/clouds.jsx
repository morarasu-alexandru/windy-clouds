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
  const [clouds, setClouds] = useState({ stock: initialClouds, active: [] });
  const [isGeneratingClouds, setIsGeneratingClouds] = useState(false);
  const intervalRef = useRef(null);
  const [timeout, setTimeout] = useState(initialTimeout);

  const destroyCloudById = useCallback((value) => {
    setActiveClouds((currentValue) => {
      if (currentValue.some((elem) => elem.id === value)) {
        return currentValue.filter((cloud) => cloud.id !== value);
      }

      return currentValue;
    });
  }, []);

  const generateRandomCloud = useCallback(() => {
    let randomIndex = null;
    let cloudLabel = null;

    setCloudsStock((currentVal) => {
      randomIndex = generateRandomNumber(currentVal.length - 1);
      cloudLabel = currentVal[randomIndex];

      return currentVal.length === 1
        ? initialClouds
        : currentVal.filter((elem) => elem !== cloudLabel);
    });

    const newCloud = {
      label: cloudLabel,
      id: uuidv4(),
      styleTop: generateRandomNumber(400),
      lifeTime: 15000,
    };

    setActiveClouds((currentVal) => [...currentVal, newCloud]);

    return newCloud;
  }, []);

  useEffect(() => {
    console.log("destroyCloudById: ", destroyCloudById);
    console.log("generateRandomCloud: ", generateRandomCloud);
    console.log("isGeneratingClouds: ", isGeneratingClouds);
    console.log("timeout: ", timeout);

    if (isGeneratingClouds) {
      intervalRef.current = setInterval(() => {
        const cloud = generateRandomCloud();
        destroyCloudById(cloud.id);
        console.log("here: ");
      }, timeout);
      console.log("intervalRef.current: ", intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [destroyCloudById, generateRandomCloud, isGeneratingClouds, timeout]);

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

  const destroyCloudByLabel = useCallback(
    (value, cb) => {
      if (activeClouds.some((elem, idx) => elem.label === value)) {
        setActiveClouds((currentVal) => {
          const elemIdx = activeClouds.findIndex(
            (elem) => elem.label === value
          );
          const newActiveClouds = [...activeClouds];
          newActiveClouds.splice(elemIdx, 1);
          currentVal.splice(elemIdx, 1);

          return currentVal;
        });
        cb(value.length);
      }
    },
    [activeClouds]
  );

  return {
    resetClouds,
    startGenerateClouds,
    stopGenerateClouds,
    destroyCloudByLabel,
    destroyCloudById,
    activeClouds,
  };
};
