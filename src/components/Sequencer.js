import React from "react";
import useSequencer from "hooks/useSequencer";
import Step from "components/basic/Step";

const rowStyle = { display: "flex", width: "100%" };
const rootStyle = { position: "relative" };
const titleStyle = { width: "50px" };
const Sequencer = () => {
  const { stepLists, updateStep, currentStep } = useSequencer();

  return (
    <div style={rootStyle}>
      {/* <div style={stepIndicatorStyle(step)} /> */}
      {stepLists.map((el, rowIndex) => (
        <div style={rowStyle} key={rowIndex}>
          <div style={titleStyle}>{el.name}</div>
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
