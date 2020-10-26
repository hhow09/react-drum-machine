import React, { useState } from "react";
const NumberController = ({ value, onChange, max, min }) => {
  return (
    <>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="number"
        placeholder={"bpm"}
      />
    </>
  );
};
export default NumberController;
