import React, { useEffect, useState } from "react";

const Expire = ({ delay, cb, children }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // setVisible(false);
      if (cb) {
        cb();
      }
    }, delay);
  }, [cb, delay]);

  return visible ? <div>{children}</div> : null;
};

export default Expire;
