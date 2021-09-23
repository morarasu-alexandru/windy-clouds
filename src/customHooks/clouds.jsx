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
  const [clouds, setClouds] = useState({ stock: initialClouds, active: [] });
  const [cloudLifeTime, setCloudLifeTime] = useState(15000);
  const [isGeneratingClouds, setIsGeneratingClouds] = useState(false);
  const intervalRef = useRef(null);
  const [timeout, setTimeout] = useState(initialTimeout);

  const destroyCloudById = useCallback((id) => {
    setClouds((clouds) => {
      const { stock, active } = clouds;

      if (active.some((elem) => elem.id === id)) {
        return {
          stock,
          active: active.filter((cloud) => cloud.id !== id),
        };
      }

      return clouds;
    });
  }, []);

  const changeCloudLifeTime = useCallback((val) => {
    setCloudLifeTime(val);
  }, []);

  const generateRandomCloud = useCallback(() => {
    setClouds(({ stock, active }) => {
      const randomIndex = generateRandomNumber(stock.length - 1);
      const cloudLabel = stock[randomIndex];

      const newStock =
        stock.length === 1
          ? initialClouds
          : stock.filter((elem) => elem !== cloudLabel);

      const newCloud = {
        label: cloudLabel,
        id: uuidv4(),
        styleTop: generateRandomNumber(400),
        lifeTime: cloudLifeTime,
      };

      return {
        stock: newStock,
        active: [...active, newCloud],
      };
    });
  }, [cloudLifeTime]);

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
  }, [destroyCloudById, generateRandomCloud, isGeneratingClouds, timeout]);

  const startGenerateClouds = useCallback(() => {
    setIsGeneratingClouds(true);
  }, []);

  const stopGenerateClouds = useCallback(() => {
    setIsGeneratingClouds(false);
  }, []);

  const resetClouds = useCallback(() => {
    setClouds({
      stock: initialClouds,
      active: [],
    });
    setIsGeneratingClouds(false);
    intervalRef.current = null;
    clearInterval(intervalRef.current);
    setTimeout(initialTimeout);
  }, []);

  const destroyCloudByLabel = useCallback((value, cb) => {
    setClouds(({ stock, active }) => {
      if (active.some((elem, idx) => elem.label === value)) {
        const elemIdx = active.findIndex((elem) => elem.label === value);

        const newActiveClouds = [...active];
        newActiveClouds.splice(elemIdx, 1);

        return {
          stock: stock,
          active: newActiveClouds,
        };
      }

      return {
        stock,
        active,
      };
    });
  }, []);

  return {
    resetClouds,
    startGenerateClouds,
    stopGenerateClouds,
    destroyCloudByLabel,
    destroyCloudById,
    activeClouds: clouds.active,
    clouds,
    changeCloudLifeTime,
  };
};
