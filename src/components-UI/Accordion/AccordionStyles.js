import styled, { keyframes, css } from "styled-components";

const showAnimation = keyframes`
0% {opacity: 0.2}
50% {opacity: 0.6}
100% {opacity: 1}
`;

export const AccordionTitle = styled.div`
  font-size: 20px;
  border-radius: 4px;
  padding: 8px;
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-top: 7px;
  margin-bottom: 7px;
  color: #fff;
  background-color: ${({ disabled }) =>
    disabled === false ? "#8fb593" : "#d8d8d8"};
  border: ${({ disabled }) =>
    disabled === false ? "1px solid #8fb593" : "1px solid #d8d8d8"};
`;

export const AccordionDescription = styled.div`
  font-size: 12px;
  border: 1px solid #8fb593;
  border-radius: 4px;
  padding: 8px;
  width: 500px;
  animation-name: ${({ animated }) => (animated ? showAnimation : "unset")};
  animation-duration: 1s;
  animation-iteration-count: initial;
  animation-direction: alternate;
  animation-timing-function: linear;
`;

export const AccordionContainer = styled.div``;
