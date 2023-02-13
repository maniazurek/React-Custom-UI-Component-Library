import React, { useState, useRef, useEffect } from "react";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const SwiperUI = ({
  mainPhotoPosition,
  itemsColumns,
  mainColor,
  templateSize,
}) => {
  const [swiperShowed, setSwiperShowed] = useState(0);

  const swiperRefs = swiperData.map((data) => {
    return useRef(null);
  });

  useEffect(() => {
    swiperRefs[swiperShowed].current.scrollIntoView({ block: "end" });
  }, [swiperShowed]);

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
    <SwiperContainer mainPhotoPosition={mainPhotoPosition}>
      <SwiperMainContainer mainPhotoPosition={mainPhotoPosition}>
        <FontAwesomeIcon
          icon={faAnglesLeft}
          style={{
            cursor: "pointer",
            color: mainColor,
            fontSize:
              templateSize === "large"
                ? "35px"
                : "medium"
                ? "25px"
                : "small"
                ? "10px"
                : "20px",
          }}
          onClick={onSwipeToLeft}
        />
        <SwiperItemsMainContainer>
          {swiperData.map((item, index) => (
            <SwiperItemMainContainer key={item.id}>
              {swiperShowed === index && (
                <SwiperItemMain
                  animated={true}
                  image={item.imageURL}
                  templateSize={templateSize}
                />
              )}
            </SwiperItemMainContainer>
          ))}
        </SwiperItemsMainContainer>
        <FontAwesomeIcon
          icon={faAnglesRight}
          onClick={onSwipeToRight}
          style={{
            cursor: "pointer",
            color: mainColor,
            fontSize:
              templateSize === "large"
                ? "35px"
                : "medium"
                ? "25px"
                : "small"
                ? "10px"
                : "20px",
          }}
        />
      </SwiperMainContainer>
      <SwiperItems
        mainPhotoPosition={mainPhotoPosition}
        itemsColumns={itemsColumns}
        templateSize={templateSize}
      >
        {swiperData.map((item, index) => (
          <SwiperItem
            ref={swiperRefs[index]}
            key={item.id}
            image={item.imageURL}
            selected={swiperShowed === index && "selected"}
            onClick={() => setSwiperShowed(index)}
            mainColor={mainColor}
            templateSize={templateSize}
          ></SwiperItem>
        ))}
      </SwiperItems>
    </SwiperContainer>
  );
};

export default SwiperUI;
