import React, { useState } from "react";
import styled from "styled-components";

import randomData from "../utils/randomData";

const ChceckboxUI = () => {
  const [selected, setSelected] = useState("false");

  const onSelectedToggle = (event) => {
    if (selected === event) {
      return setSelected("false");
    }
    setSelected(event);
  };

  return (
    <>
      {randomData.map((data, event) => (
        <CheckboxContainer>
          <Checkbox
            onClick={() => onSelectedToggle(event)}
            mode={selected === event ? "true" : "false"}
          ></Checkbox>
          <p>{data.name}</p>
        </CheckboxContainer>
      ))}
    </>
  );
};

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Checkbox = styled.span`
  border: 1px solid #000;
  width: 10px;
  height: 10px;
  background-color: ${({ mode }) => (mode === "true" ? "#8fb593" : "#fff")};
`;

export default ChceckboxUI;
