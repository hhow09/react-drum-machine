import * as Tone from "tone";

const Kick = () => {
  const synth = new Tone.MembraneSynth().toDestination();

  const trigger = (duration, time, velocity) => {
    synth.triggerAttackRelease("C2", duration, time, velocity);
  };
  return { trigger };
};
export default Kick;
