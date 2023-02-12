import styled, { keyframes } from "styled-components";

const showAnimation = keyframes`
0% {opacity: 0.1}
50% {opacity: 0.6}
100% {opacity: 1}
`;

export const TransferListContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const TransferList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 5px;
  margin-bottom: 0px;
  list-style: none;
  border: 1px solid;
  border-color: ${({ mainColor }) => mainColor};
  border-radius: 11px;
  width: 200px;
  height: 300px;
  padding: 7px;
  overflow: auto;
`;

export const TransferListElement = styled.li`
  cursor: pointer;
  padding: 4px;
  border-radius: 11px;
  &:hover {
    background-color: ${({ mainColor }) => mainColor};
    border-radius: 11px;
    color: #fff;
  }
  background-color: ${({ clicked, mainColor }) => clicked && mainColor};
  color: ${({ clicked }) => (clicked ? "#fff" : "#585858")};
  animation-name: ${({ animated }) => (animated ? showAnimation : "unset")};
  animation-duration: 0.5s;
  animation-iteration-count: initial;
  animation-direction: alternate;
  animation-timing-function: linear;
`;

export const TransferItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 35px;
`;
