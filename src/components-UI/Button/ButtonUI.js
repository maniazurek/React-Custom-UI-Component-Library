import React, { useState } from "react";
import { WelcomeButton } from "./ButtonStyles";

const ButtonUI = () => {
  const [mode, setMode] = useState(false);

  const onButtonClick = () => {
    if (mode) {
      setMode(false);
    } else {
      setMode(true);
    }
  };

  return (
    <>
      <WelcomeButton onClick={onButtonClick}>Click me</WelcomeButton>
      {mode ? <p>Show</p> : <p>No Show</p>}
    </>
  );
};

export default ButtonUI;
