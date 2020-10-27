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

  return {
    stepLists,
    updateStep,
    currentStep,
    setCurrentStep,
    resetSteps,
    selectInst,
    setSelectInst,
  };
};
