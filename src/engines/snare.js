import React, { useMemo, useCallback } from "react";
import {
  Filter,
  Frequency,
  NoiseSynth,
  Part,
  Synth,
  PolySynth,
  FrequencyEnvelope,
  MembraneSynth,
} from "tone";

const Snare = ({ volumn }) => {
  const lowPass = useMemo(
    () =>
      new Filter({
        frequency: 11000,
      }),
    []
  );

  const noise = useMemo(
    () =>
      new NoiseSynth({
        volume: -12,
        noise: {
          type: "pink",
          playbackRate: 3,
        },
        envelope: {
          attack: 0.001,
          decay: 0.13,
          sustain: 0,
          release: 0.03,
        },
      })
        .connect(lowPass)
        .toDestination(),
    []
  );
  noise.volume.value = volumn;

  // const poly = new PolySynth(Synth, {
  //   volume: -10,
  //   oscillator: {
  //     partials: [0, 2, 3, 4],
  //   },
  //   envelope: {
  //     attack: 0.001,
  //     decay: 0.17,
  //     sustain: 0,
  //     release: 0.05,
  //   },
  // }).toDestination();

  // const notes = ["C2", "D#2", "G2"];
  // const freqEnv = [];
  // console.log(poly);
  // poly.voices.forEach((v, i) => {
  //   const env = new FrequencyEnvelope({
  //     attack: 0.001,
  //     decay: 0.08,
  //     release: 0.08,
  //     baseFrequency: Frequency(notes[i]),
  //     octaves: Math.log2(13),
  //     releaseCurve: "exponential",
  //     exponent: 3.5,
  //   });
  //   env.connect(v.oscillator.frequency);
  //   freqEnv[i] = env;
  // });

  const trigger = useCallback((duration, time, velocity) => {
    noise.triggerAttack(time, velocity);
    // poly.triggerAttackRelease(["Eb3", "G4", "C5"], "16n", time);
  }, []);
  return { trigger };
};
export default Snare;
