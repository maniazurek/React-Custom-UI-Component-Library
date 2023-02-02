import styled from "styled-components";

export const SwiperContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SwiperMainContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SwiperItemMainContainer = styled.div`
//   margin: 0 5px;
`;

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
  gap: 10px;
`;

export const SwiperItem = styled.div`
  cursor: pointer;
  width: 120px;
  height: 120px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
  background-image: ${({ image }) => image && `url(${image})`};
  border: ${({ selected }) =>
    selected === "selected" ? "4px solid #8fb593" : "4px solid #fff"};
`;
