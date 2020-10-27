import React, { useState } from "react";
import useMainView from "hooks/useMainView";
import { orangeColor } from "constants/color";
import { instrumentList } from "constants/instruments";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
const rootstyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
};
const barStyle = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  width: "10%",
  height: "100%",
  marginRight: "1%",
};

const hintStyle = {
  position: "absolute",
  top: "50%",
  //   fontSize: "px",
};
const volumnStyle = (vol) => ({
  width: "100%",
  height: `${vol2Height(vol)}%`,
  backgroundColor: orangeColor,
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
});

const Mixer = () => {
  const { volumns, setVolumns } = useMainView();
  return (
    <div style={rootstyle}>
      {volumns.map((vol, idx) => (
        <VolumnBar idx={idx} vol={vol} setVolumns={setVolumns} />
      ))}
    </div>
  );
};
export default Mixer;

const VolumnBar = ({ idx, vol, setVolumns }) => {
  const [showName, setShowName] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setShowName(true);
      }}
      onMouseLeave={() => {
        setShowName(false);
      }}
      style={barStyle}
      onClick={(e) => {
        const diff = e.clientY - e.currentTarget.offsetTop;
        setVolumns((prevState) => {
          prevState[idx] = height2Vol(diff);
        });
      }}
    >
      <div style={volumnStyle(vol)}>
        {showName && (
          <div style={hintStyle}>
            {instrumentList[idx]}
            <br />
            {Math.round(vol * 10) / 10}dB
          </div>
        )}
        {showName && <div style={hintStyle}> </div>}
      </div>
    </div>
  );
};

const vol2Height = (vol) => {
  return ((vol + 30) * 100) / 60;
};
const height2Vol = (diff) => {
  return ((((450 - diff) * 2) / 9) * 30) / 50 - 30;
};
