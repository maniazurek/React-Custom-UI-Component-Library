import React, { useState } from "react";
import styled from "styled-components";

const SwitchButtonUI = () => {
  const [mode, setMode] = useState("off");

  const toggleMode = () => {
    if (mode === "off") {
      setMode("on");
    } else {
      setMode("off");
    }
  };

  return (
    <>
      {mode === "off" ? (
        <SwitchButtonContainer onClick={toggleMode}>
          <SwitchBall></SwitchBall>
        </SwitchButtonContainer>
      ) : (
        <SwitchButtonContainerClicked onClick={toggleMode}>
          <SwitchBallClicked></SwitchBallClicked>
        </SwitchButtonContainerClicked>
      )}
    </>
  );
};

const SwitchButtonContainer = styled.div`
border: 2px solid #8fb593;
background-color: #8fb593;
width: 60px;
height: 30px;
border-radius: 20px;
display: flex;
align-items: center;
cursor: pointer;
position: relative
}
`;

const SwitchButtonContainerClicked = styled.div`
border: 2px solid #8fb593;
background-color: #fff;
width: 60px;
height: 30px;
border-radius: 20px;
display: flex;
align-items: center;
cursor: pointer;
position: relative
}
`;

const SwitchBall = styled.div`
  background-color: #fff;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: absolute;
  left: 4px;
`;

const SwitchBallClicked = styled.div`
  background-color: #8fb593;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: absolute;
  right: 4px;
`;

export default SwitchButtonUI;
