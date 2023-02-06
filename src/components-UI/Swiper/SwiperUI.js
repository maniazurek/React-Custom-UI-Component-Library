import React, { useState } from "react";
import swiperData from "../../utils/swiperData";
import {
  SwiperContainer,
  SwiperMainContainer,
  SwiperItemsMainContainer,
  SwiperItemMainContainer,
  SwiperItemMain,
  SwiperItems,
  SwiperItem,
} from "./SwiperStyles";

const SwiperUI = () => {
  const [swiperShowed, setSwiperShowed] = useState(0);

  const onSwiperChangeRight = () => {
    if (swiperShowed >= swiperData.length - 1) {
      setSwiperShowed(0);
    }
  };

  const onSwipeToRight = () => {
    setSwiperShowed(swiperShowed + 1);
    onSwiperChangeRight();
  };

  const onSwiperChangeLeft = () => {
    if (swiperShowed === 0) {
      setSwiperShowed(swiperData.length - 1);
    }
  };

  const onSwipeToLeft = () => {
    setSwiperShowed(swiperShowed - 1);
    onSwiperChangeLeft();
  };

  return (
    <SwiperContainer>
      <SwiperMainContainer>
        <i
          className="fa-solid fa-angles-left fa-2xl"
          onClick={onSwipeToLeft}
          style={{ cursor: "pointer", color: "#8fb593" }}
        ></i>
        <SwiperItemsMainContainer>
          {swiperData.map((item, index) => (
            <SwiperItemMainContainer key={item.id}>
              {swiperShowed === index && (
                <SwiperItemMain animated={true} image={item.imageURL} />
              )}
            </SwiperItemMainContainer>
          ))}
        </SwiperItemsMainContainer>
        <i
          className="fa-solid fa-angles-right fa-2xl"
          onClick={onSwipeToRight}
          style={{ cursor: "pointer", color: "#8fb593" }}
        ></i>
      </SwiperMainContainer>
      <SwiperItems>
        {swiperData.map((item, index) => (
          <SwiperItem
            key={item.id}
            image={item.imageURL}
            selected={swiperShowed === index && "selected"}
            onClick={() => setSwiperShowed(index)}
          ></SwiperItem>
        ))}
      </SwiperItems>
    </SwiperContainer>
  );
};

export default SwiperUI;
