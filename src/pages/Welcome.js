import React from "react";
import { useNavigate } from "react-router-dom";
import { WelcomeContainer, WelcomeHeader, MainHeader } from "./PagesStyles";
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

export default Welcome;
