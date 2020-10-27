import React, { useState } from "react";
const buttonStyle = {
  width: "30px",
  height: "30px",
  border: "none",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  outline: "none",
  outlineOffset: "none",
};
const Button = ({ children, onClick, ...props }) => {
  return (
    <button style={buttonStyle} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
export default Button;
