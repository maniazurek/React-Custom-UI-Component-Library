import React, { useState } from "react";
import {
  CheckboxContainer,
  CheckboxItem,
  CheckboxSelectContainer,
  CheckboxSelect,
  CheckboxData,
  IconContainer,
} from "../Checkbox/CheckboxStyles";
import checkboxData from "../../utils/checkboxData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ChceckboxUI = ({ type, mainColor }) => {
  const [isSelected, setIsSelected] = useState(0);
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
    if (type === "radio") {
      onSelectSingleToggle(index);
    } else if (type === "checkbox") {
      onSelectManyToggle(index);
    }
  };

  const determineSelect = (index) => {
    if (type === "radio") {
      if (isSelected === index) {
        return true;
      } else {
        return false;
      }
    } else if (type === "checkbox") {
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
        <CheckboxContainer key={data.id}>
          {!data.disabled ? (
            <CheckboxItem onClick={() => onSelectToggle(index)}>
              <CheckboxSelectContainer
                mode={determineSelect(index)}
                type={type}
                mainColor={mainColor}
              >
                <CheckboxSelect
                  mode={determineSelect(index)}
                  type={type}
                  mainColor={mainColor}
                />
                <IconContainer mode={determineSelect(index)} type={type}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ fontSize: "11px", color: "fff" }}
                  />
                </IconContainer>
              </CheckboxSelectContainer>
              <CheckboxData>{data.name}</CheckboxData>
            </CheckboxItem>
          ) : (
            <CheckboxItem disabled={true}>
              <CheckboxSelectContainer
                mode={determineSelect(index)}
                type={type}
                mainColor={mainColor}
              >
                <CheckboxSelect type={type} />
              </CheckboxSelectContainer>
              <CheckboxData>{data.name}</CheckboxData>
            </CheckboxItem>
          )}
        </CheckboxContainer>
      ))}
    </>
  );
};

export default ChceckboxUI;
