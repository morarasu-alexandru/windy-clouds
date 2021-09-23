import React from "react";
import Cloud from "./cloud";

const CloudsSection = ({ activeClouds }) => {
  return (
    <section className="CloudsSection">
      {activeClouds.map((cloud) => {
        return (
          <Cloud key={cloud.id} cloud={cloud} destroyAfter={cloud.lifeTime} />
        );
      })}
    </section>
  );
};

export default CloudsSection;
