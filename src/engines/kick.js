import React, { useMemo, useCallback } from "react";
import * as Tone from "tone";

const Kick = ({ volumn }) => {
  const synth = useMemo(() => new Tone.MembraneSynth().toDestination(), []);
  synth.volume.value = volumn;

  const trigger = useCallback((duration, time, velocity) => {
    synth.triggerAttackRelease("C2", duration, time, velocity);
  }, []);
  return { trigger };
};
export default Kick;
