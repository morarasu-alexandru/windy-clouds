import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useKeypress, { DOWN_ARROW_KEY, UP_ARROW_KEY } from "./keyPress";

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

export const WIND_SPEED = {
  level1: 1,
  level2: 2,
  level3: 3,
};

const windBalancerMultiplier = (windSpeed) => {
  switch (windSpeed) {
    case WIND_SPEED.level1:
      return 1;
    case WIND_SPEED.level2:
      return 0.8;
    case WIND_SPEED.level3:
      return 0.6;
    default:
      return 1;
  }
};
const baseCloudLife = 20000;

const pointsBalancerMultiplier = (windSpeed) => {
  switch (windSpeed) {
    case WIND_SPEED.level1:
      return 1;
    case WIND_SPEED.level2:
      return 1.5;
    case WIND_SPEED.level3:
      return 2;
    default:
      return 1;
  }
};
const cloudGeneratorCadenceInitial = 1500;

const cadenceBalancerMultiplier = (passedMinutes) => {
  if (passedMinutes === 0) {
    return cloudGeneratorCadenceInitial;
  } else if (passedMinutes === 1) {
    return cloudGeneratorCadenceInitial / 1.2;
  } else {
    return cloudGeneratorCadenceInitial / (1 + passedMinutes / 4);
  }
};

export const useClouds = () => {
  const [clouds, setClouds] = useState({ stock: initialClouds, active: [] });
  const [windSpeed, setWindSpeed] = useState(WIND_SPEED.level1);
  const [cloudLifeTime, setCloudLifeTime] = useState(baseCloudLife);
  const [isGeneratingClouds, setIsGeneratingClouds] = useState(false);
  const isGeneratingCloudsRef = useRef(false);
  const intervalRef = useRef(null);
  const [cloudGeneratorCadence, setCloudGeneratorCadence] = useState(
    cloudGeneratorCadenceInitial
  );

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
        styleTop: generateRandomNumber(500),
        lifeTime: cloudLifeTime,
        pointsMultiplier: pointsBalancerMultiplier(windSpeed),
      };

      return {
        stock: newStock,
        active: [...active, newCloud],
      };
    });
  }, [cloudLifeTime, windSpeed]);

  const startGenerateClouds = useCallback(() => {
    setIsGeneratingClouds(true);
    isGeneratingCloudsRef.current = true;
  }, []);

  const stopGenerateClouds = useCallback(() => {
    setIsGeneratingClouds(false);
    isGeneratingCloudsRef.current = false;
  }, []);

  const resetClouds = useCallback(() => {
    setClouds({
      stock: initialClouds,
      active: [],
    });
    setIsGeneratingClouds(false);
    isGeneratingCloudsRef.current = false;
    setCloudGeneratorCadence(cloudGeneratorCadenceInitial);
  }, []);

  const destroyCloudByLabel = useCallback((value) => {
    setClouds(({ active, stock }) => {
      const elemIdx = active.findIndex((elem) => elem.label === value);

      const newActiveClouds = [...active];
      newActiveClouds.splice(elemIdx, 1);

      return {
        stock,
        active: newActiveClouds,
      };
    });
  }, []);

  const changeWindSpeed = useCallback((newWindSpeed) => {
    setWindSpeed(newWindSpeed);
  }, []);

  const increaseWindSpeed = useCallback(() => {
    setWindSpeed((currentWindSpeed) => {
      return (() => {
        switch (currentWindSpeed) {
          case WIND_SPEED.level1:
            return WIND_SPEED.level2;
          case WIND_SPEED.level2:
            return WIND_SPEED.level3;
          case WIND_SPEED.level3:
            return WIND_SPEED.level3;
          default:
            return WIND_SPEED.level1;
        }
      })();
    });
  }, []);

  const decreaseWindSpeed = useCallback(() => {
    setWindSpeed((currentWindSpeed) => {
      return (() => {
        switch (currentWindSpeed) {
          case WIND_SPEED.level1:
            return WIND_SPEED.level1;
          case WIND_SPEED.level2:
            return WIND_SPEED.level1;
          case WIND_SPEED.level3:
            return WIND_SPEED.level2;
          default:
            return WIND_SPEED.level1;
        }
      })();
    });
  }, []);

  useKeypress(UP_ARROW_KEY, increaseWindSpeed);
  useKeypress(DOWN_ARROW_KEY, decreaseWindSpeed);

  const changeCloudGeneratorCadence = useCallback((passedMinutes) => {
    setCloudGeneratorCadence(cadenceBalancerMultiplier(passedMinutes));
  }, []);

  useEffect(() => {
    console.log("isGeneratingClouds: ", isGeneratingClouds);
    if (isGeneratingCloudsRef.current) {
      intervalRef.current = setInterval(() => {
        generateRandomCloud();
      }, cloudGeneratorCadence);
    }

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [
    destroyCloudById,
    generateRandomCloud,
    isGeneratingClouds,
    cloudGeneratorCadence,
  ]);

  useEffect(() => {
    setCloudLifeTime(baseCloudLife * windBalancerMultiplier(windSpeed));
  }, [windSpeed]);

  return useMemo(
    () => ({
      resetClouds,
      startGenerateClouds,
      stopGenerateClouds,
      destroyCloudByLabel,
      destroyCloudById,
      activeClouds: clouds.active,
      windSpeed,
      changeWindSpeed,
      changeCloudGeneratorCadence,
    }),
    [
      resetClouds,
      startGenerateClouds,
      stopGenerateClouds,
      destroyCloudByLabel,
      destroyCloudById,
      clouds.active,
      windSpeed,
      changeWindSpeed,
      changeCloudGeneratorCadence,
    ]
  );
};
