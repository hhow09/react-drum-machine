import React, { useState, useEffect, useMemo } from "react";
import { useImmer } from "use-immer";
import * as Tone from "tone";
import Kick from "engines/kick";
import Snare from "engines/snare";
import useSequencer from "hooks/useSequencer";

const useSoundEngine = ({ bpm }) => {
  Tone.Transport.bpm.value = bpm;
  const { stepLists, setCurrentStep } = useSequencer();
  const { trigger: kickTrigger } = useMemo(() => Kick(), []);
  const { trigger: snareTrigger } = useMemo(() => Snare(), []);
  const [loop, setLoop] = useImmer([]);

  const updateLoop = () => {
    for (let [idx, el] of Object.entries(stepLists)) {
      let scheduleIdx;
      if (loop[idx]) {
        Tone.Transport.clear(loop[idx]);
      }
      switch (idx) {
        case "0":
          scheduleIdx = Tone.Transport.schedule((time) => {
            stepLists[idx].stepList.forEach((velocity, stepIndex) => {
              if (velocity > 0)
                kickTrigger(
                  "16n",
                  time + stepIndex * Tone.Time("16n").toSeconds(),
                  velocity
                );

              Tone.Draw.schedule(() => {
                setCurrentStep(stepIndex);
              }, time + stepIndex * Tone.Time("16n").toSeconds());
            });
          }, "0");
          break;
        case "1":
          scheduleIdx = Tone.Transport.schedule((time) => {
            stepLists[idx].stepList.forEach((velocity, stepIndex) => {
              if (velocity)
                snareTrigger(
                  "16n",
                  time + stepIndex * Tone.Time("16n").toSeconds(),
                  velocity
                );
            });
          }, "0");
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
