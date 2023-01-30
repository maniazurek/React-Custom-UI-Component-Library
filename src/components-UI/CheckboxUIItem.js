import React, { useState } from "react";
import styled from "styled-components";

const CheckboxUIItem = ({ id, name, checked }) => {
  const [selected, setSelected] = useState(false);

  const onSelectedToggle = (event) => {
    if (selected === event) {
      return setSelected("false");
    }
    setSelected(event);
  };

  return (
    <CheckboxContainer
      onClick={
        checked === "many"
          ? () => setSelected(!selected)
          : () => onSelectedToggle(event)
      }
    >
      <Checkbox mode={selected ? "true" : "false"}></Checkbox>
      <p>{name}</p>
    </CheckboxContainer>
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

export default CheckboxUIItem;
