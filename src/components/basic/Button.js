import React, { useState, useRef } from "react";
import { shadowColor } from "constants/color";
const buttonStyle = {
  width: "30px",
  height: "30px",
  border: "none",
  borderRadius: "20%",
  boxShadow: `1px 1px 1px ${shadowColor}`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  outline: "none",
  outlineOffset: "none",
};
const Button = ({ children, onClick, ...props }) => {
  const ref = useRef();
  const handleClick = (e) => {
    ref.current.blur();
    onClick();
  };
  return (
    <button ref={ref} style={buttonStyle} onClick={handleClick} {...props}>
      {children}
    </button>
  );
};
export default Button;
