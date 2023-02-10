import React, { useEffect, useState } from "react";
import uniqid from "uniqid";
import { RatingContainer, RatingComment } from "./RatingStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const RatingUI = ({
  scale,
  scaleOne,
  scaleTwo,
  scaleThree,
  scaleFour,
  scaleFive,
  mainColor,
}) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState(null);

  useEffect(() => {
    window.addEventListener("click", () => setRating(0));
    window.addEventListener("click", () => setComment(null));
  }, []);

  useEffect(() => {
    const onAddRatingComment = () => {
      if (scale === 0) {
        setComment(null);
      } else if (rating <= scale / 5) {
        setComment(scaleOne);
      } else if (rating <= scale / 2.5) {
        setComment(scaleTwo);
      } else if (rating <= scale / 1.6) {
        setComment(scaleThree);
      } else if (rating <= scale / 1.25) {
        setComment(scaleFour);
      } else if (rating === scale / 1) {
        setComment(scaleFive);
      }
    };
    onAddRatingComment();
  }, [rating, scale]);

  const onAddRating = (event, index) => {
    setRating(index + 1);
    event.stopPropagation();
  };

  return (
    <>
      <RatingContainer>
        {Array(Number(scale))
          .fill()
          .map((_, index) =>
            index + 1 <= rating ? (
              <FontAwesomeIcon
                icon={icon({ name: "star", style: "solid" })}
                onClick={(event) => onAddRating(event, index)}
                style={{ color: mainColor }}
              />
            ) : (
              <FontAwesomeIcon
                icon={icon({ name: "star", style: "regular" })}
                onClick={(event) => onAddRating(event, index)}
                style={{ color: mainColor }}
              />
            )
          )}
      </RatingContainer>
      <RatingComment>{comment}</RatingComment>
    </>
  );
};

export default RatingUI;
