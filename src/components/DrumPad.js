import React from "react";
import Pad from "components/basic/Pad";
import PadMenu from "components/PadMenu";
import useSequencer from "hooks/useSequencer";

const rootStyle = {
  width: "100%",
  height: "100%",
  //   backgroundColor: "yellow",
  display: "flex",
};
const padsStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexWrap: "wrap",
};

const DrumPad = () => {
  const { stepLists, updateStep, currentStep, selectInst } = useSequencer();

  return (
    <div style={rootStyle}>
      <div style={padsStyle}>
        {stepLists[selectInst].stepList.map((velocity, index) => (
          <Pad
            key={index}
            index={index}
            velocity={velocity}
            handleClick={(e) => {
              updateStep(selectInst, index, velocity > 0 ? 0 : 0.8);
            }}
            handleDoubleClick={() => {
              updateStep(selectInst, index, 1);
            }}
            // isCurrent={index === currentStep}
          />
        ))}
      </div>
      <PadMenu />
    </div>
  );
};

export default DrumPad;
