import React, { useState } from "react";
import {
  CheckboxContainer,
  CheckboxItem,
  CheckboxSelect,
  CheckboxData,
} from "../Checkbox/CheckboxStyles";
import checkboxData from "../../utils/checkboxData";

const ChceckboxUI = ({ select }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [areSelected, setAreSelected] = useState([]);

  const onSelectSingleToggle = (index) => {
    if (isSelected === index) {
      return setIsSelected(false);
    }
    setIsSelected(index);
  };

  const onSelectManyToggle = (index) => {
    if (areSelected.includes(index)) {
      setAreSelected(areSelected.filter((item) => item !== index));
    } else {
      setAreSelected([...areSelected, index]);
    }
  };

  const onSelectToggle = (index) => {
    if (select === "single") {
      onSelectSingleToggle(index);
    } else if (select === "many") {
      onSelectManyToggle(index);
    }
  };

  const determineSelect = (index) => {
    if (select === "single") {
      if (isSelected === index) {
        return true;
      } else {
        return false;
      }
    } else if (select === "many") {
      if (areSelected.includes(index)) {
        return true;
      } else {
        return false;
      }
    }
  };

  return (
    <>
      {checkboxData.map((data, index) => (
        <CheckboxContainer>
          {!data.disabled ? (
            <CheckboxItem onClick={() => onSelectToggle(index)}>
              <CheckboxSelect mode={determineSelect(index)} />
              <CheckboxData>{data.name}</CheckboxData>
            </CheckboxItem>
          ) : (
            <CheckboxItem disabled={true}>
              <CheckboxSelect />
              <CheckboxData>{data.name}</CheckboxData>
            </CheckboxItem>
          )}
        </CheckboxContainer>
      ))}
    </>
  );
};

export default ChceckboxUI;
