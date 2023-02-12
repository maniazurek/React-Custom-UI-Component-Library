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
    mainPhotoPosition === "left" && "row"};
  flex-direction: ${({ mainPhotoPosition }) =>
    mainPhotoPosition === "right" && "row"};
  flex-direction: ${({ mainPhotoPosition }) =>
    mainPhotoPosition === "top" && "column"};
  flex-direction: ${({ mainPhotoPosition }) =>
    mainPhotoPosition === "bottom" && "column"};
`;

export const SwiperMainContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  order: ${({ mainPhotoPosition }) => mainPhotoPosition === "right" && "2"};
  order: ${({ mainPhotoPosition }) => mainPhotoPosition === "bottom" && "2"};
  order: ${({ mainPhotoPosition }) => mainPhotoPosition === "left" && "0"};
  order: ${({ mainPhotoPosition }) => mainPhotoPosition === "top" && "0"};
`;

export const SwiperItemsMainContainer = styled.div``;

export const SwiperItemMainContainer = styled.div``;

export const SwiperItemMain = styled.div`
  width: ${({ templateSize }) => templateSize === "large" && "500px"};
  width: ${({ templateSize }) => templateSize === "medium" && "350px"};
  width: ${({ templateSize }) => templateSize === "small" && "200px"};
  height: ${({ templateSize }) => templateSize === "large" && "400px"};
  height: ${({ templateSize }) => templateSize === "medium" && "280px"};
  height: ${({ templateSize }) => templateSize === "small" && "160px"};
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
    itemsColumns === "4" && "1fr 1fr 1fr 1fr"};
  grid-template-columns: ${({ itemsColumns }) => itemsColumns === "1" && "1fr"};
  grid-template-columns: ${({ itemsColumns }) =>
    itemsColumns === "2" && "1fr 1fr"};
  grid-template-columns: ${({ itemsColumns }) =>
    itemsColumns === "3" && "1fr 1fr 1fr"};

  grid-template-columns: ${({ itemsColumns, mainPhotoPosition }) =>
    mainPhotoPosition === "top" && itemsColumns === "1" && "1fr 1fr 1fr 1fr"};
  grid-template-columns: ${({ itemsColumns, mainPhotoPosition }) =>
    mainPhotoPosition === "bottom" &&
    itemsColumns === "1" &&
    "1fr 1fr 1fr 1fr"};

  grid-template-columns: ${({ itemsColumns, mainPhotoPosition }) =>
    mainPhotoPosition === "top" && itemsColumns === "2" && "1fr 1fr 1fr 1fr"};
  grid-template-columns: ${({ itemsColumns, mainPhotoPosition }) =>
    mainPhotoPosition === "bottom" &&
    itemsColumns === "2" &&
    "1fr 1fr 1fr 1fr"};

  grid-template-columns: ${({ itemsColumns, mainPhotoPosition }) =>
    mainPhotoPosition === "top" && itemsColumns === "3" && "1fr 1fr 1fr 1fr"};
  grid-template-columns: ${({ itemsColumns, mainPhotoPosition }) =>
    mainPhotoPosition === "bottom" &&
    itemsColumns === "3" &&
    "1fr 1fr 1fr 1fr"};

  grid-template-columns: ${({ itemsColumns, mainPhotoPosition }) =>
    mainPhotoPosition === "top" && itemsColumns === "4" && "1fr 1fr 1fr 1fr"};
  grid-template-columns: ${({ itemsColumns, mainPhotoPosition }) =>
    mainPhotoPosition === "bottom" &&
    itemsColumns === "4" &&
    "1fr 1fr 1fr 1fr"};

  align-items: center;
  gap: 6px;

  height: ${({ templateSize }) => templateSize === "large" && "404px"};
  height: ${({ templateSize }) => templateSize === "medium" && "280px"};
  height: ${({ templateSize }) => templateSize === "small" && "160px"};

  height: ${({ templateSize, mainPhotoPosition, itemsColumns }) =>
    mainPhotoPosition === "top" &&
    templateSize === "large" &&
    itemsColumns === "1" &&
    "128px"};

  height: ${({ templateSize, mainPhotoPosition, itemsColumns }) =>
    mainPhotoPosition === "bottom" &&
    templateSize === "large" &&
    itemsColumns === "1" &&
    "128px"};

  height: ${({ templateSize, mainPhotoPosition, itemsColumns }) =>
    mainPhotoPosition === "top" &&
    templateSize === "medium" &&
    itemsColumns === "1" &&
    "92px"};

  height: ${({ templateSize, mainPhotoPosition, itemsColumns }) =>
    mainPhotoPosition === "bottom" &&
    templateSize === "medium" &&
    itemsColumns === "1" &&
    "92px"};

  height: ${({ templateSize, mainPhotoPosition, itemsColumns }) =>
    mainPhotoPosition === "top" &&
    templateSize === "small" &&
    itemsColumns === "1" &&
    "52.8px"};

  height: ${({ templateSize, mainPhotoPosition, itemsColumns }) =>
    mainPhotoPosition === "bottom" &&
    templateSize === "small" &&
    itemsColumns === "1" &&
    "52.8px"};

  height: ${({ templateSize, mainPhotoPosition, itemsColumns }) =>
    mainPhotoPosition === "top" &&
    templateSize === "large" &&
    itemsColumns === "2" &&
    "256px"};

  height: ${({ templateSize, mainPhotoPosition, itemsColumns }) =>
    mainPhotoPosition === "bottom" &&
    templateSize === "large" &&
    itemsColumns === "2" &&
    "256px"};

  height: ${({ templateSize, mainPhotoPosition, itemsColumns }) =>
    mainPhotoPosition === "top" &&
    templateSize === "medium" &&
    itemsColumns === "2" &&
    "184px"};

  height: ${({ templateSize, mainPhotoPosition, itemsColumns }) =>
    mainPhotoPosition === "bottom" &&
    templateSize === "medium" &&
    itemsColumns === "2" &&
    "184px"};

  height: ${({ templateSize, mainPhotoPosition, itemsColumns }) =>
    mainPhotoPosition === "top" &&
    templateSize === "small" &&
    itemsColumns === "2" &&
    "105px"};

  height: ${({ templateSize, mainPhotoPosition, itemsColumns }) =>
    mainPhotoPosition === "bottom" &&
    templateSize === "small" &&
    itemsColumns === "2" &&
    "105px"};

  height: ${({ templateSize, mainPhotoPosition, itemsColumns }) =>
    mainPhotoPosition === "top" &&
    templateSize === "large" &&
    itemsColumns === "3" &&
    "360px"};

  height: ${({ templateSize, mainPhotoPosition, itemsColumns }) =>
    mainPhotoPosition === "bottom" &&
    templateSize === "large" &&
    itemsColumns === "3" &&
    "360px"};

  height: ${({ templateSize, mainPhotoPosition, itemsColumns }) =>
    mainPhotoPosition === "top" &&
    templateSize === "medium" &&
    itemsColumns === "3" &&
    "278px"};

  height: ${({ templateSize, mainPhotoPosition, itemsColumns }) =>
    mainPhotoPosition === "bottom" &&
    templateSize === "medium" &&
    itemsColumns === "3" &&
    "278px"};

  height: ${({ templateSize, mainPhotoPosition, itemsColumns }) =>
    mainPhotoPosition === "top" &&
    templateSize === "small" &&
    itemsColumns === "3" &&
    "175px"};

  height: ${({ templateSize, mainPhotoPosition, itemsColumns }) =>
    mainPhotoPosition === "bottom" &&
    templateSize === "small" &&
    itemsColumns === "3" &&
    "175px"};

  height: ${({ templateSize, mainPhotoPosition, itemsColumns }) =>
    mainPhotoPosition === "top" &&
    templateSize === "large" &&
    itemsColumns === "4" &&
    "495px"};

  height: ${({ templateSize, mainPhotoPosition, itemsColumns }) =>
    mainPhotoPosition === "bottom" &&
    templateSize === "large" &&
    itemsColumns === "4" &&
    "495px"};

  height: ${({ templateSize, mainPhotoPosition, itemsColumns }) =>
    mainPhotoPosition === "top" &&
    templateSize === "medium" &&
    itemsColumns === "4" &&
    "362px"};

  height: ${({ templateSize, mainPhotoPosition, itemsColumns }) =>
    mainPhotoPosition === "bottom" &&
    templateSize === "medium" &&
    itemsColumns === "4" &&
    "362px"};

  height: ${({ templateSize, mainPhotoPosition, itemsColumns }) =>
    mainPhotoPosition === "top" &&
    templateSize === "small" &&
    itemsColumns === "4" &&
    "230px"};

  height: ${({ templateSize, mainPhotoPosition, itemsColumns }) =>
    mainPhotoPosition === "bottom" &&
    templateSize === "small" &&
    itemsColumns === "4" &&
    "230px"};

  overflow: scroll;
`;

export const SwiperItem = styled.div`
  cursor: pointer;
  width: ${({ templateSize }) => templateSize === "large" && "112px"};
  width: ${({ templateSize }) => templateSize === "medium" && "78.4px"};
  width: ${({ templateSize }) => templateSize === "small" && "44.8px"};
  height: ${({ templateSize }) => templateSize === "large" && "112px"};
  height: ${({ templateSize }) => templateSize === "medium" && "78.4px"};
  height: ${({ templateSize }) => templateSize === "small" && "44.8px"};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
  background-image: ${({ image }) => image && `url(${image})`};
  border: ${({ selected }) =>
    selected === "selected" ? "4px solid" : "4px solid"};
  border-color: ${({ selected, mainColor }) =>
    selected === "selected" ? mainColor : "#fff"};
`;
