import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Welcome = () => {
  const navigate = useNavigate();

  const onStart = () => {
    navigate("/main");
  };

  return (
    <WelcomeContainer>
      <WelcomeHeader>Work smarter and create faster with</WelcomeHeader>
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

const WelcomeButton = styled.button`
  background: #8fb593;
  border: 1px solid #8fb593;
  border-radius: 10px;
  font-family: "Playfair Display", serif;
  font-size: 20px;
  width: 160px;
  height: 60px;
  cursor: pointer;
`;

export default Welcome;
