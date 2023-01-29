import React, { useState } from "react";
import styled from "styled-components";

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

const WelcomeButton = styled.div`
  background: #8fb593;
  border: 1px solid #8fb593;
  border-radius: 10px;
  font-family: "Playfair Display", serif;
  font-size: 20px;
  width: 160px;
  height: 60px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export default ButtonUI;
