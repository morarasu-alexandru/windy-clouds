import React, { useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import style from "./cloud.module.scss";

const Cloud = ({ cloud, destroyAfter, autoDestroyCloud, decreaseOneLive }) => {
  const timeoutRef = useRef(true);

  const handleDestroy = useCallback(() => {
    autoDestroyCloud(cloud.id);
  }, [autoDestroyCloud, cloud.id]);

  useEffect(() => {
    return () => {
      handleDestroy();
      clearInterval(timeoutRef.current);
    };
  }, [handleDestroy]);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      decreaseOneLive();
      handleDestroy();
    }, destroyAfter);
  }, [decreaseOneLive, destroyAfter, handleDestroy]);

  return (
    <motion.div
      style={{ top: `${cloud.styleTop}px` }}
      className={style.CloudElement}
      animate={{ x: 1300 }}
      transition={{ duration: destroyAfter / 1000, ease: "linear" }}
    >
      <span className={style.CloudElementText}>{cloud.label}</span>
    </motion.div>
  );
};

export default Cloud;
