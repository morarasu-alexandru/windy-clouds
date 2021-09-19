import React from "react";
import { motion } from "framer-motion";

const CloudsSection = ({ activeClouds }) => {
  return (
    <section className="CloudsSection">
      {activeClouds.map((cloud) => {
        return (
          <motion.div
            style={{ top: `${cloud.styleTop}px` }}
            className={"CloudElement"}
            animate={{ x: 900 }}
            transition={{ duration: 15, ease: "linear" }}
            key={cloud.id}
          >
            <span className={"CloudElement__Text"}>{cloud.label}</span>
          </motion.div>
        );
      })}
    </section>
  );
};

export default CloudsSection;
