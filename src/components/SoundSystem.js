import React, { useState, useEffect } from "react";
import useSoundEngine from "hooks/useSoundEngine";
import * as Tone from "tone";
import useSequencer from "hooks/useSequencer";
import Button from "components/basic/Button";
import useMainView from "hooks/useMainView";
import RetroHitCounter from "react-retro-hit-counter";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";

import { greyColor } from "constants/color";
import playSvg from "assets/svg/play.svg";
import stopSvg from "assets/svg/stop.svg";
import resetSvg from "assets/svg/reset.svg";
import randomSvg from "assets/svg/random.svg";
import nextSvg from "assets/svg/next.svg";
import prevSvg from "assets/svg/prev.svg";

const rootStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "70vw",
  height: "50px",
  minWidth: "400px",
  maxWidth: "500px",
  maxHeight: "50px",
  overflow: "scroll",
  backgroundColor: greyColor,
};

const btnStyle = {
  marginRight: "10px",
};
const btnStyleFst = {
  marginLeft: "10px",
  marginRight: "10px",
};

const customInputStyle = {
  width: "40px",
  height: "20px",
  backgroundColor: "transparent",
  border: "none",
  outline: "none",
  outlineOffset: "none",
};

const viewLabelStyle = {
  width: "120px",
  textAlign: "right",
  marginRight: "10px",
  fontSize: "20px",
};

const overlayInnerStyle = { backgroundColor: "transparent" };

const bpmRange = [20, 200];

const SoundSystem = () => {
  const [bpm, setBpm] = useState(90);
  const [showBPM, setShowBPM] = useState(false);
  const { now } = useSoundEngine({ bpm });
  const { genRandomSteps, resetSteps } = useSequencer();
  const {
    currViewName,
    currViewHint,
    mainViewNext,
    mainViewPrev,
    hasNext,
    hasPrev,
  } = useMainView();
  //TODO change theme
  const handleBpmChange = (e) => {
    const valueNum = parseFloat(e.target.value);

    if (valueNum >= bpmRange[0] && valueNum <= bpmRange[1])
      setBpm(parseFloat(e.target.value));
    else if (valueNum < bpmRange[0]) setBpm(bpmRange[0]);
    else if (valueNum > bpmRange[1]) setBpm(bpmRange[1]);
  };

  useEffect(() => {
    const handleKeySpace = (event) => {
      if (event.code === "Space") {
        Tone.start();
        Tone.Transport.toggle();
      }
    };
    window.addEventListener("keydown", handleKeySpace);
    return () => window.removeEventListener("keydown", handleKeySpace);
  });
  return (
    <div style={rootStyle}>
      <Tooltip
        overlay={
          <input
            style={customInputStyle}
            placeholder="BPM"
            type="number"
            min="1"
            onChange={handleBpmChange}
            value={bpm}
          />
        }
        overlayInnerStyle={overlayInnerStyle}
        placement="left"
      >
        <div style={btnStyleFst}>
          <RetroHitCounter
            hits={bpm}
            withBorder={false}
            withGlow={false}
            minLength={3}
            size={30}
            padding={4}
            digitSpacing={3}
            segmentThickness={3}
            segmentSpacing={0.5}
            segmentActiveColor="red"
            segmentInactiveColor="#5c2e2e"
            backgroundColor="#222222"
          />
        </div>
      </Tooltip>
      <Tooltip overlay="Play" placement="bottom">
        <div style={btnStyle}>
          <Button
            onClick={() => {
              Tone.start();
              Tone.Transport.start();
            }}
          >
            <img src={playSvg} alt="play" width="15px" />
          </Button>
        </div>
      </Tooltip>
      <Tooltip overlay="Stop" placement="bottom">
        <div style={btnStyle}>
          <Button
            onClick={() => {
              Tone.Transport.pause();
            }}
          >
            <img src={stopSvg} alt="Stop" width="15px" />
          </Button>
        </div>
      </Tooltip>
      <Tooltip overlay="Reset" placement="bottom">
        <div style={btnStyle}>
          <Button
            onClick={() => {
              resetSteps();
            }}
          >
            <img src={resetSvg} alt="Reset" width="15px" />
          </Button>
        </div>
      </Tooltip>
      <Tooltip overlay="Generate Random Pattern" placement="bottom">
        <div style={btnStyle}>
          <Button
            onClick={(e) => {
              genRandomSteps();
            }}
          >
            <img src={randomSvg} alt="RandomSteps" width="15px" />
          </Button>
        </div>
      </Tooltip>
      <div style={btnStyle}>
        {hasPrev && (
          <Tooltip overlay="Previous View" placement="bottom">
            <Button
              onClick={() => {
                mainViewPrev();
              }}
            >
              <img src={prevSvg} alt="prevView" width="15px" />
            </Button>
          </Tooltip>
        )}
      </div>
      <div style={btnStyle}>
        {hasNext && (
          <Tooltip overlay="Next View" placement="bottom">
            <Button
              onClick={() => {
                mainViewNext();
              }}
            >
              <img src={nextSvg} alt="nextView" width="15px" />
            </Button>
          </Tooltip>
        )}
      </div>
      <Tooltip overlay={currViewHint} placement="bottom">
        <div style={viewLabelStyle}>{currViewName}</div>
      </Tooltip>
    </div>
  );
};
export default SoundSystem;
