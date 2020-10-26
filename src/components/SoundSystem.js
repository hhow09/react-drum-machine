import React, { useState, useEffect } from "react";
import useSoundEngine from "hooks/useSoundEngine";
import * as Tone from "tone";
import useSequencer from "hooks/useSequencer";

const SoundSystem = () => {
  const [bpm, setBpm] = useState(90);
  const { now } = useSoundEngine({ bpm });
  const { resetSteps } = useSequencer();
  return (
    <div>
      BPM
      <input
        placeholder="bpm"
        type="number"
        min="1"
        onChange={(e) => {
          setBpm(parseFloat(e.target.value));
        }}
        value={bpm}
      />
      <button
        onClick={() => {
          Tone.start();
          Tone.Transport.start();
        }}
      >
        start
      </button>
      <button
        onClick={() => {
          Tone.Transport.pause();
        }}
      >
        Stop
      </button>
      <button
        onClick={() => {
          resetSteps();
        }}
      >
        Reset
      </button>
    </div>
  );
};
export default SoundSystem;
