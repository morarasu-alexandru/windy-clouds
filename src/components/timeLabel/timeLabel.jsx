import React, { memo, useMemo } from "react";

const TimeLabel = memo(function TimeLabelComponent({ value }) {
  const convertedValue = useMemo(() => {
    return value > 9 ? value : `0${value}`;
  }, [value]);

  return <span>{convertedValue}</span>;
});

export default TimeLabel;
