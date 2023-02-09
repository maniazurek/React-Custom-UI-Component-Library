import styled, { keyframes } from "styled-components";

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
  border: 1px solid;
  background-color: ${({ disabled, mainColor, disabledColor }) =>
    disabled === false ? mainColor : disabledColor};
  border-color: ${({ disabled, mainColor, disabledColor }) =>
    disabled === false ? mainColor : disabledColor};
  color: ${({ contentColor }) => contentColor};
`;

export const AccordionDescription = styled.div`
  font-size: 12px;
  border: 1px solid #8fb593;
  border-radius: 4px;
  padding: 12px;
  width: 492px;
  animation-name: ${({ animated }) => (animated ? showAnimation : "unset")};
  animation-duration: 1s;
  animation-iteration-count: initial;
  animation-direction: alternate;
  animation-timing-function: linear;
  background-color: ${({ contentColor }) => contentColor};
  height: ${({ showContent }) => showContent === "limited" && "100px"};
  height: ${({ showContent }) => showContent === "unlimited" && "unset"};
  overflow-y: scroll;
`;

export const AccordionContainer = styled.div``;
