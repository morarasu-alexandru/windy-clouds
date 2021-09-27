import React, { memo, useContext } from "react";
import Cloud from "./cloud";
import { GameContext } from "../../context/gameContext";

const CloudsSection = memo(() => {
  const { activeClouds, handleDestroyCloud, decreaseOneLive } =
    useContext(GameContext);

  console.log("activeClouds: ", activeClouds);

  return (
    <section className="CloudsSection">
      {activeClouds?.map((cloud) => {
        return (
          <Cloud
            key={cloud.id}
            cloud={cloud}
            destroyAfter={cloud.lifeTime}
            autoDestroyCloud={handleDestroyCloud}
            decreaseOneLive={decreaseOneLive}
          />
        );
      })}
    </section>
  );
});

export default CloudsSection;
