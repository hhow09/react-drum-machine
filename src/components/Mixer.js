import React, { useState } from "react";
import useMainView from "hooks/useMainView";
import { orangeColor } from "constants/color";
import { instrumentList } from "constants/instruments";
import Button from "components/basic/Button";
import resetSvg from "assets/svg/reset.svg";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
const rootstyle = {
  position: "relative",
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
  zIndex: "999",
  top: "50%",
  width: "50px",
  fontWeight: "800",
  //   fontSize: "px",
};

const btnStyle = {
  position: "absolute",
  top: "20px",
  right: "20px",
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
      <Tooltip overlay={"Reset Volumes"}>
        <div style={btnStyle}>
          <Button
            onClick={(e) => {
              setVolumns(() => Array.from({ length: volumns.length }, () => 0));
            }}
          >
            <img src={resetSvg} alt="RandomSteps" width="15px" />
          </Button>
        </div>
      </Tooltip>
      {volumns.map((vol, idx) => (
        <VolumnBar key={idx} idx={idx} vol={vol} setVolumns={setVolumns} />
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
        const diff = e.clientY - e.currentTarget.parentElement.offsetTop;
        setVolumns((prevState) => {
          prevState[idx] = height2Vol(diff);
        });
      }}
    >
      <div style={volumnStyle(vol)}>
        {showName && (
          <div style={hintStyle}>
            {instrumentList[idx]}
            <div className="num">{Math.round(vol * 10) / 10}</div>
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
