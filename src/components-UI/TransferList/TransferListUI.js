import React, { useEffect, useState } from "react";
import transferListData from "../../utils/transferListData";
import {
  TransferListContainer,
  TransferList,
  TransferListElement,
  TransferItemContainer,
} from "./TransferListStyles";
import { SelectContainer, SelectInput } from "../SelectBox/SelectBoxStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const TransferListUI = ({ mainColor, disabledColor }) => {
  const [defaultInput, setDefaultInput] = useState("");
  const [selectedtInput, setSelectedInput] = useState("");
  const [chosenSelected, setChosenSelected] = useState(0);
  const [chosenDefault, setChosenDefault] = useState(0);
  const [defaultArray, setDefaultArray] = useState(transferListData);
  const [selectedArray, setSelectedArray] = useState([]);

  useEffect(() => {
    if (chosenDefault === defaultArray.length) {
      const newChosenDefault = defaultArray.length - 1;
      setChosenDefault(newChosenDefault);
    }
  }, [defaultArray]);

  useEffect(() => {
    if (chosenSelected === selectedArray.length) {
      const newChosenSelected = selectedArray.length - 1;
      setChosenSelected(newChosenSelected);
    }
  }, [selectedArray]);

  const onAddToSelectedArray = (chosenDefault) => {
    setDefaultArray(
      defaultArray.filter(
        (item) => defaultArray.indexOf(item) !== chosenDefault
      )
    );
    setSelectedArray([...selectedArray, defaultArray[chosenDefault]]);
    setChosenSelected(selectedArray.length);
  };

  const onAddToDefaultArray = (chosenSelected) => {
    setSelectedArray(
      selectedArray.filter(
        (item) => selectedArray.indexOf(item) !== chosenSelected
      )
    );
    setDefaultArray([...defaultArray, selectedArray[chosenSelected]]);
    setChosenDefault(defaultArray.length);
  };

  const onAddAllToSelectedArray = () => {
    setSelectedArray([...selectedArray, ...defaultArray]);
    setChosenSelected(selectedArray.length);
    setChosenDefault(0);
    setDefaultArray([]);
    setDefaultInput("");
  };

  const onDeleteAllFromSelectedArray = () => {
    setDefaultArray([...defaultArray, ...selectedArray]);
    setChosenDefault(0);
    setSelectedArray([]);
    setSelectedInput("");
  };

  const onClearDefaultInput = () => {
    setDefaultInput("");
  };

  const onClearSelectedInput = () => {
    setSelectedInput("");
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "43px" }}>
        <SelectContainer
          style={{ width: "200px", paddingRight: "10px" }}
          mainColor={mainColor}
        >
          <SelectInput
            placeholder="Select an item..."
            value={defaultInput}
            onChange={(event) => setDefaultInput(event.target.value)}
          />
          {defaultInput && (
            <FontAwesomeIcon
              icon={icon({ name: "x", style: "solid" })}
              style={{ cursor: "pointer", color: mainColor }}
              onClick={onClearDefaultInput}
            />
          )}
        </SelectContainer>
        <SelectContainer style={{ width: "200px" }} mainColor={mainColor}>
          <SelectInput
            placeholder="Select an item..."
            value={selectedtInput}
            onChange={(event) => setSelectedInput(event.target.value)}
          />
          {selectedtInput && (
            <FontAwesomeIcon
              icon={icon({ name: "x", style: "solid" })}
              style={{ cursor: "pointer", color: mainColor }}
              onClick={onClearSelectedInput}
            />
          )}
        </SelectContainer>
      </div>
      <TransferListContainer>
        <TransferList mainColor={mainColor}>
          {defaultArray
            .filter((item) => item.name.toLowerCase().includes(defaultInput))
            .map((data, index) => (
              <TransferListElement
                mainColor={mainColor}
                animated={true}
                key={data.id}
                clicked={index === chosenDefault && "clicked"}
                onClick={() => setChosenDefault(index)}
              >
                {data.name}
              </TransferListElement>
            ))}
        </TransferList>
        <TransferItemContainer>
          {defaultArray.length === 0 ? (
            <>
              <FontAwesomeIcon
                icon={icon({ name: "angles-right", style: "solid" })}
                style={{ color: disabledColor, cursor: "no-drop" }}
              />
              <FontAwesomeIcon
                icon={icon({ name: "chevron-right", style: "solid" })}
                style={{ color: disabledColor, cursor: "no-drop" }}
              />
            </>
          ) : (
            <>
              <FontAwesomeIcon
                icon={icon({ name: "angles-right", style: "solid" })}
                style={{ color: mainColor, cursor: "pointer" }}
                onClick={onAddAllToSelectedArray}
              />
              <FontAwesomeIcon
                icon={icon({ name: "chevron-right", style: "solid" })}
                style={{ color: mainColor, cursor: "pointer" }}
                onClick={() => onAddToSelectedArray(chosenDefault)}
              />
            </>
          )}
          {selectedArray.length === 0 ? (
            <>
              <FontAwesomeIcon
                icon={icon({ name: "chevron-left", style: "solid" })}
                style={{ color: disabledColor, cursor: "no-drop" }}
              />
              <FontAwesomeIcon
                icon={icon({ name: "angles-left", style: "solid" })}
                style={{ color: disabledColor, cursor: "no-drop" }}
              />
            </>
          ) : (
            <>
              <FontAwesomeIcon
                icon={icon({ name: "chevron-left", style: "solid" })}
                style={{ color: mainColor, cursor: "pointer" }}
                onClick={() => onAddToDefaultArray(chosenSelected)}
              />
              <FontAwesomeIcon
                icon={icon({ name: "angles-left", style: "solid" })}
                style={{ color: mainColor, cursor: "pointer" }}
                onClick={onDeleteAllFromSelectedArray}
              />
            </>
          )}
        </TransferItemContainer>
        <TransferList mainColor={mainColor}>
          {selectedArray
            .filter((item) => item.name.toLowerCase().includes(selectedtInput))
            .map((data, index) => (
              <TransferListElement
                mainColor={mainColor}
                animated={true}
                key={data.id}
                clicked={index === chosenSelected && "clicked"}
                onClick={() => setChosenSelected(index)}
              >
                {data.name}
              </TransferListElement>
            ))}
        </TransferList>
      </TransferListContainer>
    </div>
  );
};

export default TransferListUI;
