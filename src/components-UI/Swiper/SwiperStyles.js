import styled, { keyframes } from "styled-components";

const showAnimation = keyframes`
0% {opacity: 0.1}
50% {opacity: 0.6}
100% {opacity: 1}
`;

export const SwiperContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const SwiperMainContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SwiperItemsMainContainer = styled.div``;

export const SwiperItemMainContainer = styled.div``;

export const SwiperItemMain = styled.div`
  width: 500px;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({ image }) => image && `url(${image})`};
  animation-name: ${({ animated }) => (animated ? showAnimation : "unset")};
  animation-duration: 1s;
  animation-iteration-count: initial;
  animation-direction: alternate;
  animation-timing-function: linear;
`;

export const SwiperItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  gap: 6px;
  width: 500px;
  height: 404px;
  overflow: scroll;
`;

export const SwiperItem = styled.div`
  cursor: pointer;
  width: 112px;
  height: 112px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
  background-image: ${({ image }) => image && `url(${image})`};
  border: ${({ selected }) =>
    selected === "selected" ? "4px solid #8fb593" : "4px solid #fff"};
`;
