import React, { useMemo, useCallback } from "react";
import { MembraneSynth } from "tone";

const Toms = ({ volumnH, volumnM, volumnL }) => {
  const tomL = useMemo(
    () =>
      new MembraneSynth({
        octaves: 1,
      }).toDestination(),
    []
  );
  const tomM = useMemo(
    () =>
      new MembraneSynth({
        octaves: 1,
      }).toDestination(),
    []
  );
  const tomH = useMemo(
    () =>
      new MembraneSynth({
        octaves: 1,
      }).toDestination(),
    []
  );
  tomL.volume.value = volumnL;
  tomM.volume.value = volumnM;
  tomH.volume.value = volumnH;

  const floorTomTrigger = useCallback(
    (duration, time, velocity) => {
      tomL.triggerAttackRelease("E2", duration, time, velocity);
    },
    [volumnL]
  );
  const midTomTrigger = useCallback(
    (duration, time, velocity) => {
      tomM.triggerAttackRelease("G2", duration, time, velocity);
    },
    [volumnM]
  );
  const highTomTrigger = useCallback(
    (duration, time, velocity) => {
      tomH.triggerAttackRelease("A#2", duration, time, velocity);
    },
    [volumnH]
  );
  return { floorTomTrigger, midTomTrigger, highTomTrigger };
};

export default Toms;

// export const MidTom = () => {
//   const tom = useMemo(
//     () =>
//       MembraneSynth({
//         octaves: 1,
//       }).toDestination(),
//     []
//   );
//   const trigger = useCallback((duration, time, velocity) => {
//     tom.triggerAttackRelease("G2", duration, time, velocity);
//   }, []);
//   return { trigger };
// };
// export const FloorTom = () => {
//   const tom = useMemo(
//     () =>
//       new Tone.MembraneSynth({
//         octaves: 1,
//       }).toDestination(),
//     []
//   );
//   const trigger = useCallback((duration, time, velocity) => {
//     tom.triggerAttackRelease("G2", duration, time, velocity);
//   }, []);
//   return { trigger };
// };

// export const HighTom = useMemo(
//   () =>
//     new Tone.MembraneSynth({
//       octaves: 1,
//     }).toDestination(),
//   []
// );
