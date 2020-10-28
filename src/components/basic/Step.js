import React, { useState, useRef } from "react";
import {
  stepOnColor,
  stepOnHeavyColor,
  currStepColor,
  currAndOnStepColor,
  shadowColor,
} from "constants/color";
const stepStyle = (velocity, isCurrent, index) => ({
  width: "6.25%",
  height: "10px",
  boxShadow: `1px 1px 1px ${shadowColor}`,
  backgroundColor:
    isCurrent && velocity > 0
      ? currAndOnStepColor
      : isCurrent && velocity === 0
      ? currStepColor
      : velocity > 0.9
      ? stepOnHeavyColor
      : velocity > 0
      ? stepOnColor
      : "transparent",
});

const Step = ({ index, velocity, isCurrent }) => {
  return <div style={stepStyle(velocity, isCurrent, index)} />;
};
export default Step;
