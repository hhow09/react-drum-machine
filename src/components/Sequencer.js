import React from "react";
import useSequencer from "hooks/useSequencer";
import Step from "components/basic/Step";
import { greyColor } from "constants/color";

const rootStyle = {
  position: "relative",
  width: "70vw",
  minWidth: "400px",
  maxWidth: "500px",
  backgroundColor: greyColor,
};
const rowStyle = {
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
};

const Sequencer = () => {
  const { stepLists, updateStep, currentStep } = useSequencer();

  return (
    <div style={rootStyle}>
      {/* <div style={stepIndicatorStyle(step)} /> */}
      {stepLists.map((el, rowIndex) => (
        <div style={rowStyle} key={rowIndex}>
          {el.stepList.map((velocity, index) => (
            <Step
              key={index}
              index={index}
              velocity={velocity}
              handleClick={(e) => {
                updateStep(rowIndex, index, velocity > 0 ? 0 : 0.8);
              }}
              handleDoubleClick={() => {
                updateStep(rowIndex, index, 1);
              }}
              isCurrent={index === currentStep}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
export default Sequencer;
