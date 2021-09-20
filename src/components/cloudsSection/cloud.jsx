import React, { useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import Expire from "../expire/expire";

const Cloud = ({ cloud, destroyAfter, autoDestroyCloud }) => {
  useEffect(() => {}, []);

  const handleAutoDestroy = useCallback(() => {
    autoDestroyCloud(cloud.id);
  });

  return (
    <Expire delay={destroyAfter} cb={handleAutoDestroy}>
      <motion.div
        style={{ top: `${cloud.styleTop}px` }}
        className={"CloudElement"}
        animate={{ x: 1300 }}
        transition={{ duration: destroyAfter / 1000, ease: "linear" }}
      >
        <span className={"CloudElement__Text"}>{cloud.label}</span>
      </motion.div>
    </Expire>
  );
};

export default Cloud;
