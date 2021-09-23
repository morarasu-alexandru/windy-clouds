import React, { useCallback, useEffect } from "react";
import { motion } from "framer-motion";

const Cloud = ({ cloud, destroyAfter, autoDestroyCloud }) => {
  useEffect(() => {}, []);

  const handleDestroy = useCallback(() => {
    autoDestroyCloud(cloud.id);
  }, [autoDestroyCloud, cloud.id]);

  useEffect(() => {
    setTimeout(() => {
      handleDestroy();
    }, destroyAfter);
  }, [destroyAfter, handleDestroy]);

  return (
    <motion.div
      style={{ top: `${cloud.styleTop}px` }}
      className={"CloudElement"}
      animate={{ x: 1300 }}
      transition={{ duration: destroyAfter / 1000, ease: "linear" }}
    >
      <span className={"CloudElement__Text"}>{cloud.label}</span>
    </motion.div>
  );
};

export default Cloud;
