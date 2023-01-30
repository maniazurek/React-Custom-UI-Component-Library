import React, { useState } from "react";
import { CheckboxContainer, CheckboxItem } from "../Checkbox/CheckboxStyles";
import checkboxData from "../../utils/checkboxData";

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
      {checkboxData.map((data, event) => (
        <CheckboxContainer>
          <CheckboxItem
            onClick={() => onSelectedToggle(event)}
            mode={selected === event ? "true" : "false"}
          ></CheckboxItem>
          <p>{data.name}</p>
        </CheckboxContainer>
      ))}
    </>
  );
};

export default ChceckboxUI;
