import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useImmer } from "use-immer";
import * as Tone from "tone";
import Kick from "engines/kick";
import Snare from "engines/snare";
import Hihat from "engines/hihat";
import Toms from "engines/toms";
import useSequencer from "hooks/useSequencer";
import useMainView from "hooks/useMainView";

const useSoundEngine = ({ bpm }) => {
  const { volumns } = useMainView();
  Tone.Transport.bpm.value = bpm;
  const { stepLists, setCurrentStep } = useSequencer();
  const { trigger: kickTrigger } = Kick({ volumn: volumns[0] });
  const { trigger: snareTrigger } = Snare({ volumn: volumns[1] });
  const { trigger: hihatTrigger } = Hihat({ volumn: volumns[2] });
  const { floorTomTrigger, midTomTrigger, highTomTrigger } = Toms({
    volumnH: volumns[3],
    volumnM: volumns[4],
    volumnL: volumns[5],
  });
  const [loop, setLoop] = useImmer([]);

  const scheduler = useCallback((callback, stepLists, idx) => {
    const scheduleIdx = Tone.Transport.schedule((time) => {
      stepLists[idx].stepList.forEach((velocity, stepIndex) => {
        if (velocity > 0)
          callback(
            "16n",
            time + stepIndex * Tone.Time("16n").toSeconds(),
            velocity
          );
        Tone.Draw.schedule(() => {
          setCurrentStep(stepIndex);
        }, time + stepIndex * Tone.Time("16n").toSeconds());
      });
    }, "0");
    return scheduleIdx;
  }, []);

  const updateLoop = () => {
    for (let [idx, el] of Object.entries(stepLists)) {
      let scheduleIdx;
      if (loop[idx]) {
        Tone.Transport.clear(loop[idx]);
      }
      switch (idx) {
        case "0":
          scheduleIdx = scheduler(kickTrigger, stepLists, idx);
          break;
        case "1":
          scheduleIdx = scheduler(snareTrigger, stepLists, idx);
          break;
        case "2":
          scheduleIdx = scheduler(hihatTrigger, stepLists, idx);
          break;
        case "3":
          scheduleIdx = scheduler(highTomTrigger, stepLists, idx);
          break;
        case "4":
          scheduleIdx = scheduler(midTomTrigger, stepLists, idx);
          break;
        case "5":
          scheduleIdx = scheduler(floorTomTrigger, stepLists, idx);
          break;
        default:
          break;
      }
      Tone.Transport.setLoopPoints(0, "1m");
      Tone.Transport.loop = true;
      setLoop((prevState) => {
        prevState[idx] = scheduleIdx;
      });
    }
  };

  useEffect(() => {
    updateLoop();
  }, [stepLists]);

  return { now: Tone.now() };
};

export default useSoundEngine;
