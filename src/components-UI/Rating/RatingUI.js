import React, { useEffect, useState } from "react";
import { RatingContainer } from "./RatingStyles";

const RatingUI = () => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    window.addEventListener("click", () => setRating(0));
  }, []);

  const onAddRating = (event, index) => {
    setRating(index + 1);
    event.stopPropagation();
  };

  return (
    <RatingContainer>
      {Array(5)
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
  );
};

export default RatingUI;
