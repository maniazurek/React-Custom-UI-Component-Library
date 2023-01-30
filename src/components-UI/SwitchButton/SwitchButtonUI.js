import React, { useState } from "react";
import styled from "styled-components";

const SwitchButtonUI = () => {
  const [modeStyle, setModeStyle] = useState("off");

  const toggleMode = () => {
    if (modeStyle === "off") {
      setModeStyle("on");
    } else {
      setModeStyle("off");
    }
  };

  return (
    <SwitchButtonContainer
      onClick={toggleMode}
      mode={modeStyle === "off" ? "off" : "on"}
    >
      <SwitchBall mode={modeStyle === "off" ? "off" : "on"} />
    </SwitchButtonContainer>
  );
};

const SwitchButtonContainer = styled.div`
  border: 2px solid #8fb593;
  width: 60px;
  height: 30px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  background-color: ${({ mode }) => (mode === "off" ? "#8fb593" : "#fff")};
`;

const SwitchBall = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: absolute;
  background-color: ${({ mode }) => (mode === "off" ? "#fff" : "#8fb593")};
  left: ${({ mode }) => (mode === "off" ? "4px" : "unset")};
  right: ${({ mode }) => (mode === "on" ? "4px" : "unset")};
`;

export default SwitchButtonUI;
