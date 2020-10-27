import React, { useState, useEffect } from "react";
import Sequencer from "components/Sequencer";
import { ProviderSequencer } from "hooks/useSequencer";
import SoundSystem from "components/SoundSystem";
import MainView from "components/MainView";
import { ProviderMainView } from "hooks/useMainView";

const rootStyle = {
  width: "800px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
const App = () => {
  return (
    <div style={rootStyle}>
      <h1>Drum Machine</h1>
      <ProviderSequencer>
        <Sequencer />
        <ProviderMainView>
          <MainView />
          <SoundSystem />
        </ProviderMainView>
      </ProviderSequencer>
    </div>
  );
};

export default App;
