import React, { useState, useRef } from "react";
import {
  stepOnColor,
  stepOnHeavyColor,
  currStepColor,
  currAndOnStepColor,
} from "constants/color";
const stepStyle = (velocity, isCurrent, index) => ({
  width: "6.25%",
  height: "10px",
  // borderRadius: "15px",
  // margin: "0.5vw",
  // marginRight: (index + 1) % 4 === 0 ? "1.4vw" : "0.5vw",
  boxShadow: "1px 1px 1px #9E9E9E",
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
  return <div style={stepStyle(velocity, isCurrent, index)}></div>;
};
export default Step;
