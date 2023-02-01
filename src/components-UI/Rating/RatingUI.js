import React, { useState } from "react";
import { RatingContainer } from "./RatingStyles";

const RatingUI = () => {
  const [rating, setRating] = useState(0);
  return (
    <RatingContainer>
      {Array(5)
        .fill()
        .map((_, index) =>
          index + 1 <= rating ? (
            <i
              class="fa-solid fa-star"
              style={{ color: "#ffd700" }}
              onClick={() => setRating(index + 1)}
            ></i>
          ) : (
            <i
              class="fa-regular fa-star"
              style={{ color: "#ffd700" }}
              onClick={() => setRating(index + 1)}
            ></i>
          )
        )}
    </RatingContainer>
  );
};

export default RatingUI;
