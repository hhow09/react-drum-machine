import React, { useState, useRef } from "react";
import useSequencer from "hooks/useSequencer";
import useDoubleClick from "hooks/useDoubleClick";
import {
  stepOnColor,
  stepOnHeavyColor,
  currStepColor,
  currAndOnStepColor,
} from "constants/color";
const stepStyle = (velocity, isCurrent, index) => ({
  width: "2vw",
  height: "2vw",
  borderRadius: "15px",
  margin: "0.5vw",
  marginRight: (index + 1) % 4 === 0 ? "1.4vw" : "0.5vw",
  border: `1px solid black`,
  backgroundColor:
    isCurrent && velocity > 0
      ? currAndOnStepColor
      : isCurrent && velocity === 0
      ? currStepColor
      : velocity > 0.9
      ? stepOnHeavyColor
      : velocity > 0
      ? stepOnColor
      : "white",
});

const Step = ({
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

  return (
    <div ref={stepRef} style={stepStyle(velocity, isCurrent, index)}></div>
  );
};
export default Step;
