import React, { useState, useEffect } from "react";
import Sequencer from "components/Sequencer";
import { ProviderSequencer } from "hooks/useSequencer";
import * as Tone from "tone";
import SoundSystem from "components/SoundSystem";

const rootStyle = {
  width: "100%",
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
        <SoundSystem />
        <Sequencer />
      </ProviderSequencer>
    </div>
  );
};

export default App;
