import React, { useState } from "react";
import swiperData from "../../utils/swiperData";
import styled from "styled-components";

const SwiperUI = () => {
  const [swiperShowed, setSwiperShowed] = useState(0);

  const onSwiperChangeRight = () => {
    if (swiperShowed >= swiperData.length - 1) {
      setSwiperShowed(0);
    }
  };

  const onSwiperChangeLeft = () => {
    if (swiperShowed === 0) {
      setSwiperShowed(swiperData.length - 1);
    }
  };

  const onSwipeToRight = () => {
    setSwiperShowed(swiperShowed + 1);
    onSwiperChangeRight();
  };

  const onSwipeToLeft = () => {
    setSwiperShowed(swiperShowed - 1);
    onSwiperChangeLeft();
  };

  console.log(swiperShowed);
  console.log(swiperData.length);

  return (
    <SwiperContainer>
      <i
        class="fa-solid fa-angles-left fa-2xl"
        onClick={onSwipeToLeft}
        style={{ cursor: "pointer" }}
      ></i>
      {swiperData.map((item, index) => (
        <div>
          {swiperShowed === index ? (
            <SwiperItemMain image={item.imageURL}></SwiperItemMain>
          ) : (
            <SwiperItem image={item.imageURL}></SwiperItem>
          )}
        </div>
      ))}
      <i
        class="fa-solid fa-angles-right fa-2xl"
        onClick={onSwipeToRight}
        style={{ cursor: "pointer" }}
      ></i>
    </SwiperContainer>
  );
};

const SwiperContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SwiperItemMain = styled.div`
  width: 400px;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 5px;
  background-image: ${({ image }) => image && `url(${image})`};
`;

const SwiperItem = styled.div`
  width: 200px;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 5px;
  background-image: ${({ image }) => image && `url(${image})`};
`;

export default SwiperUI;
