import React, { useState, createContext, useContext } from "react";
import { instrumentList } from "constants/instruments";
import { useImmer } from "use-immer";
const mainViewContext = createContext();
const { Provider: MainViewProvider } = mainViewContext;

export const ProviderMainView = ({ children }) => {
  const mainView = useMainViewProvider();
  return <MainViewProvider value={mainView}>{children}</MainViewProvider>;
};
const useMainView = () => {
  return useContext(mainViewContext);
};
export default useMainView;

const views = [
  {
    name: "DrumPad",
    hint: (
      <p>
        Click: normal.
        <br /> Double Click: accentuation
      </p>
    ),
  },
  {
    name: "Mixer",
    hint: <p>max:30 dB, min:-30dB</p>,
  },
];

const useMainViewProvider = () => {
  const [mainIdx, setMainIdx] = useState(0);
  const mainViewNext = () => {
    if (mainIdx + 1 < views.length) {
      setMainIdx((prev) => prev + 1);
    }
  };
  const mainViewPrev = () => {
    if (mainIdx > 0) {
      setMainIdx((prev) => prev - 1);
    }
  };
  const [mainVolumn, setMainVolumn] = useState(1);
  const [volumns, setVolumns] = useImmer(
    new Array(instrumentList.length).fill(0)
  );

  return {
    mainIdx,
    currViewName: views[mainIdx].name,
    currViewHint: views[mainIdx].hint,
    mainViewNext,
    mainViewPrev,
    hasNext: mainIdx + 1 < views.length,
    hasPrev: mainIdx > 0,
    volumns,
    setVolumns,
  };
};
