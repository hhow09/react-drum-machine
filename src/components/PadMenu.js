import React, { useState, useRef } from "react";
import { instrumentList } from "constants/instruments";
import useSequencer from "hooks/useSequencer";
import { orangeColor } from "constants/color";
const padMenuStyle = {
  width: "100px",
  height: "100%",
  borderLeft: "2px solid black",
};
const menuItemStyle = (selected) => ({
  height: "30px",
  boxShadow: "1px 1px 1px #9E9E9E",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  color: selected ? orangeColor : "black",
  fontWeight: selected ? 900 : 400,
});
const PadMenu = () => {
  const { selectInst, setSelectInst } = useSequencer();
  return (
    <div style={padMenuStyle}>
      {instrumentList.map((el, idx) => (
        <MenuItem
          onClick={() => {
            setSelectInst(idx);
          }}
          selected={selectInst === idx}
        >
          {el}
        </MenuItem>
      ))}
    </div>
  );
};

export default PadMenu;

const MenuItem = ({ children, selected, ...props }) => (
  <div style={menuItemStyle(selected)} {...props}>
    {children}
  </div>
);