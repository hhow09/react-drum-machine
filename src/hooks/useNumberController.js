import React, { useState } from "react";

const useNumberController = (defaultValue = 90) => {
  const [value, setValue] = useState(defaultValue);
  return { value, setValue };
};

export default useNumberController;
