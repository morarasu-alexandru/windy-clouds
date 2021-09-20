import React from "react";
import Cloud from "./cloud";

const CloudsSection = ({ activeClouds, autoDestroyCloud }) => {
  console.log("activeClouds: ", activeClouds);

  return (
    <section className="CloudsSection">
      {activeClouds.map((cloud) => {
        return (
          <Cloud
            key={cloud.id}
            cloud={cloud}
            destroyAfter={cloud.lifeTime}
            autoDestroyCloud={autoDestroyCloud}
          />
        );
      })}
    </section>
  );
};

export default CloudsSection;
