import React, { useState, useEffect, createContext, useContext } from "react";
import { useImmer } from "use-immer";
import { instrumentList, stepNum } from "constants/instruments";
const sequencerContext = createContext();
const { Provider: SequencerProvider } = sequencerContext;

export const ProviderSequencer = ({ children }) => {
  const sequencer = useSequencerProvider();
  return <SequencerProvider value={sequencer}>{children}</SequencerProvider>;
};
const useSequencer = () => {
  return useContext(sequencerContext);
};
export default useSequencer;

const useSequencerProvider = () => {
  const defaultStepLists = instrumentList.map((el) => ({
    name: el,
    stepList: new Array(stepNum).fill(0),
  }));
  const [stepLists, setStepLists] = useImmer(defaultStepLists);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectInst, setSelectInst] = useState(0);
  const updateStep = (rowIndex, stepIndex, velocity) => {
    setStepLists((prevState) => {
      prevState[rowIndex].stepList[stepIndex] = velocity;
    });
  };
  const resetSteps = () => {
    setStepLists(() => defaultStepLists);
  };
  const genRandomSteps = () => {
    setStepLists((prevState) => {
      for (let el of prevState) {
        el.stepList = randomArr(stepNum);
      }
    });
  };
  //TODO active step sq-1
  //TODO play direction 改變drumpad播放的方向
  return {
    stepLists,
    updateStep,
    currentStep,
    setCurrentStep,
    resetSteps,
    selectInst,
    setSelectInst,
    genRandomSteps,
  };
};

const randomArr = (length = 0) => {
  return Array.from({ length }, () =>
    Math.random() >= 0.8 ? Math.random() : 0
  );
};
