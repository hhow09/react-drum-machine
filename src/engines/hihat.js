import React, { useMemo, useCallback } from "react";
import * as Tone from "tone";

const Hihat = ({ volumn }) => {
  const noise = useMemo(
    () =>
      new Tone.NoiseSynth({
        playbackRate: 5,
        envelope: {
          sustain: 0.0001,
        },
      }).toDestination(),
    []
  );
  noise.volume.value = volumn - 5;

  const trigger = useCallback((duration, time, velocity) => {
    noise.triggerAttackRelease(duration, time, velocity);
  }, []);
  return { trigger };
};
export default Hihat;
