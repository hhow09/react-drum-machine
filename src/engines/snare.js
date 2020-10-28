import React, { useMemo, useCallback } from "react";
import { NoiseSynth, MembraneSynth, Gate, Gain, MidSideCompressor } from "tone";

const Snare = ({ volumn }) => {
  const noise = useMemo(
    () =>
      new NoiseSynth({
        noise: {
          type: "brown",
          playbackRate: 3,
        },
        envelope: {
          // attack: 0.005,
          decay: 0.1,
          sustain: 0.02,
        },
      }).toDestination(),
    []
  );

  const tom = useMemo(
    () =>
      new MembraneSynth({
        volume: -5,
      }).toDestination(),
    []
  );

  noise.volume.value = volumn + 10;
  tom.volume.value = volumn;

  // const gate = useMemo(() => new Gate(-30, 5), []);
  // const compressor = useMemo(() => new MidSideCompressor(), []);
  // const gain = useMemo(() => new Gain(), []);
  // noise.chain(compressor, gate);
  // tom.chain(compressor, gate);

  const trigger = useCallback((duration, time, velocity) => {
    tom.triggerAttackRelease("G1", duration, time, velocity);
    noise.triggerAttackRelease(duration, time, velocity);
  }, []);
  return { trigger };
};
export default Snare;
