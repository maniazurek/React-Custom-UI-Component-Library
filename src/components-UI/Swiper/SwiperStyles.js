import styled from "styled-components";

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
`;

export const SwiperItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
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
