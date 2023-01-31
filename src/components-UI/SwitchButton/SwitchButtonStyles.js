import styled from "styled-components";

export const SwitchButtonContainer = styled.div`
  border: 2px solid #8fb593;
  width: 60px;
  height: 30px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  background-color: ${({ mode }) => (mode === false ? "#8fb593" : "#fff")};
`;

export const SwitchBall = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: absolute;
  background-color: ${({ mode }) => (mode === false ? "#fff" : "#8fb593")};
  left: ${({ mode }) => (mode === false ? "4px" : "unset")};
  right: ${({ mode }) => (mode === true ? "4px" : "unset")};
`;
