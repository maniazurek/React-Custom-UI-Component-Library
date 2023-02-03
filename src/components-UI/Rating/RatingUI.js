import React, { useEffect, useState } from "react";
import { RatingContainer, RatingComment } from "./RatingStyles";

const RatingUI = ({ stars, poor, ok, good, verygood, excellent }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState(null);

  useEffect(() => {
    window.addEventListener("click", () => setRating(0));
    window.addEventListener("click", () => setComment(null));
  }, []);

  useEffect(() => {
    const onAddRatingComment = () => {
      if (rating === 0) {
        setComment(null);
      } else if (rating <= stars / 5) {
        setComment(poor);
      } else if (rating <= stars / 2.5) {
        setComment(ok);
      } else if (rating <= stars / 1.6) {
        setComment(good);
      } else if (rating <= stars / 1.25) {
        setComment(verygood);
      } else if (rating === stars / 1) {
        setComment(excellent);
      }
    };
    onAddRatingComment();
  }, [rating, stars]);

  const onAddRating = (event, index) => {
    setRating(index + 1);
    // onAddRatingComment(stars);
    event.stopPropagation();
  };

  // const onAddRatingComment = (stars) => {
  //   if (rating === 0) {
  //     setComment(null);
  //   } else if (rating <= stars / 5) {
  //     setComment(poor);
  //   } else if (rating <= stars / 2.5) {
  //     setComment(ok);
  //   } else if (rating <= stars / 1.6) {
  //     setComment(good);
  //   } else if (rating <= stars / 1.25) {
  //     setComment(verygood);
  //   } else if (rating === stars / 1) {
  //     setComment(excellent);
  //   }
  // };

  return (
    <>
      <RatingContainer>
        {Array(Number(stars))
          .fill()
          .map((_, index) =>
            index + 1 <= rating ? (
              <i
                class="fa-solid fa-star"
                style={{ color: "#ffd700" }}
                onClick={(event) => onAddRating(event, index)}
              ></i>
            ) : (
              <i
                class="fa-regular fa-star"
                style={{ color: "#ffd700" }}
                onClick={(event) => onAddRating(event, index)}
              ></i>
            )
          )}
      </RatingContainer>
      <RatingComment>{comment}</RatingComment>
    </>
  );
};

export default RatingUI;
