import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { WelcomeButton } from "../components-UI/Button/ButtonStyles";

const Welcome = () => {
  const navigate = useNavigate();

  const onStart = () => {
    navigate("/accordion");
  };

  return (
    <WelcomeContainer>
      <WelcomeHeader>Create faster and work smarter with</WelcomeHeader>
      <MainHeader>UI Mania</MainHeader>
      <WelcomeButton onClick={onStart}>Get started!</WelcomeButton>
    </WelcomeContainer>
  );
};

const WelcomeContainer = styled.div`
  margin: 200px;
`;

const WelcomeHeader = styled.h2`
  margin: 0;
  font-size: 50px;
  width: 500px;
`;

const MainHeader = styled.h1`
  color: #8fb593;
  font-size: 60px;
  margin-top: 5px;
  margin-bottom: 20px;
`;

export default Welcome;
