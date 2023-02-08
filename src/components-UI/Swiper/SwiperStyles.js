import styled, { keyframes } from "styled-components";

const showAnimation = keyframes`
0% {opacity: 0.1}
50% {opacity: 0.6}
100% {opacity: 1}
`;

export const SwiperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  flex-direction: ${({ mainPhotoPosition }) =>
    mainPhotoPosition === "top" ? "column" : "row"};
`;

export const SwiperMainContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  order: ${({ mainPhotoPosition }) =>
    mainPhotoPosition === "right"
      ? "2"
      : mainPhotoPosition === "bottom"
      ? "2"
      : mainPhotoPosition === "left"
      ? "0"
      : mainPhotoPosition === "top"
      ? "0"
      : "0"};
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
  grid-template-columns: ${({ itemsColumns }) =>
    itemsColumns === "1"
      ? "1fr"
      : itemsColumns === "2"
      ? "1fr 1fr"
      : itemsColumns === "3"
      ? "1fr 1fr 1fr"
      : "1fr 1fr 1fr 1fr"};
  align-items: center;
  gap: 6px;
  // width: 500px;
  height: 404px;
  overflow: scroll;
  order: ${({ mainPhotoPosition }) =>
    mainPhotoPosition === "right" || "bottom" ? "0" : "2"};
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
