import React, { useState, useEffect } from "react";
import Sequencer from "components/Sequencer";
import { ProviderSequencer } from "hooks/useSequencer";
import SoundSystem from "components/SoundSystem";
import MainView from "components/MainView";
import { ProviderMainView } from "hooks/useMainView";
import ReactMarkdown from "react-markdown";
import useMD from "hooks/useMD";

const rootStyle = {
  width: "800px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
const App = () => {
  const readmeUrl = `https://raw.githubusercontent.com/hhow09/react-drum-machine/master/README.md`;
  const { md } = useMD(readmeUrl);
  return (
    <div style={rootStyle}>
      <h1>React Drum Machine</h1>
      <ProviderSequencer>
        <Sequencer />
        <ProviderMainView>
          <MainView />
          <SoundSystem />
        </ProviderMainView>
      </ProviderSequencer>
      <div className="readme">
        <ReactMarkdown children={md} />
      </div>
    </div>
  );
};

export default App;
