import React, { useState, useRef } from "react";
import { greyColor } from "constants/color";
import DrumPad from "components/DrumPad";
import Mixer from "components/Mixer";
import useMainView from "hooks/useMainView";

const rootStyle = {
  width: "70vw",
  height: "450px",
  minWidth: "400px",
  maxWidth: "500px",
  maxHeight: "450px",
  backgroundColor: greyColor,
};

const MainView = () => {
  const { mainIdx } = useMainView();
  return (
    <div style={rootStyle}>
      {mainIdx === 0 && <DrumPad />}
      {mainIdx === 1 && <Mixer />}
    </div>
  );
};

export default MainView;
