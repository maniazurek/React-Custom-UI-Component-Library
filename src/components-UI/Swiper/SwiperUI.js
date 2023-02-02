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

  return (
    <SwiperContainer>
      <div style={{ display: "flex", alignItems: "center" }}>
        <i
          class="fa-solid fa-angles-left fa-2xl"
          onClick={onSwipeToLeft}
          style={{ cursor: "pointer", color: "#8fb593" }}
        ></i>
        {swiperData.map((item, index) => (
          <div>
            {swiperShowed === index && (
              <SwiperItemMain image={item.imageURL}></SwiperItemMain>
            )}
          </div>
        ))}
        <i
          class="fa-solid fa-angles-right fa-2xl"
          onClick={onSwipeToRight}
          style={{ cursor: "pointer", color: "#8fb593" }}
        ></i>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "10px",
        }}
      >
        {swiperData.map((item, index) => (
          <SwiperItem
            image={item.imageURL}
            selected={swiperShowed === index ? "selected" : "notselected"}
            onClick={() => setSwiperShowed(index)}
          ></SwiperItem>
        ))}
      </div>
    </SwiperContainer>
  );
};

const SwiperContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SwiperItemMain = styled.div`
  width: 500px;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ image }) => image && `url(${image})`};
`;

const SwiperItem = styled.div`
  cursor: pointer;
  width: 120px;
  height: 120px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 5px;
  background-image: ${({ image }) => image && `url(${image})`};
  border: ${({ selected }) =>
    selected === "selected" ? "4px solid #8fb593" : "4px solid #fff"};
`;

export default SwiperUI;
