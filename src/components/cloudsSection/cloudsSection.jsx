import React, { memo } from "react";
import Cloud from "./cloud";

const CloudsSection = memo(
  ({ activeClouds, autoDestroyCloud, decreaseOneLive }) => {
    console.log("activeClouds: ", activeClouds);

    return (
      <section className="CloudsSection">
        {activeClouds?.map((cloud) => {
          return (
            <Cloud
              key={cloud.id}
              cloud={cloud}
              destroyAfter={cloud.lifeTime}
              autoDestroyCloud={autoDestroyCloud}
              decreaseOneLive={decreaseOneLive}
            />
          );
        })}
      </section>
    );
  }
);

export default CloudsSection;
