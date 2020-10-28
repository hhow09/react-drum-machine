import React, { useState, useEffect } from "react";
const useMD = (url) => {
  const [md, setMD] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => response.text())
      .then((text) => {
        setMD(text);
      });
  }, [url]);
  return {
    md,
  };
};
export default useMD;
