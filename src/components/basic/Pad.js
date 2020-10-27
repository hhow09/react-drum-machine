import React, { useState, useRef } from "react";
import useDoubleClick from "hooks/useDoubleClick";
import { stepOnColor, stepOnHeavyColor } from "constants/color";
const rootStyle = (velocity) => ({
  width: "24%",
  height: "24%",
  boxShadow: "1px 1px 1px #9E9E9E",
  flexShrink: "1",
  flexGrow: "1",
  backgroundColor:
    velocity > 0.9
      ? stepOnHeavyColor
      : velocity > 0
      ? stepOnColor
      : "transparent",
});
const Pad = ({
  index,
  velocity,
  handleClick,
  isCurrent,
  handleDoubleClick,
}) => {
  const stepRef = useRef();

  useDoubleClick({
    onSingleClick: handleClick,
    onDoubleClick: handleDoubleClick,
    ref: stepRef,
    latency: 250,
  });
  return <div ref={stepRef} style={rootStyle(velocity)}></div>;
};

export default Pad;
