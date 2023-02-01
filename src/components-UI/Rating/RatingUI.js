import React, { useState } from "react";
import styled from "styled-components";

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

const RatingContainer = styled.div`
  display: flex;
  gap: 5px;
  cursor: pointer;
  font-size: 20px;
`;

export default RatingUI;
