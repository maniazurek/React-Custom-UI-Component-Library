import React, { useEffect, useState } from "react";
import transferListData from "../../utils/transferListData";
import {
  TransferListContainer,
  TransferList,
  TransferListElement,
  TransferItemContainer,
} from "./TransferListStyles";

const TransferListUI = () => {
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
  };

  const onDeleteAllFromSelectedArray = () => {
    setDefaultArray([...defaultArray, ...selectedArray]);
    setChosenDefault(0);
    setSelectedArray([]);
  };

  return (
    <TransferListContainer>
      <TransferList>
        {defaultArray.map((data, index) => (
          <TransferListElement
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
            <i className="fa-solid fa-angles-right fa-lg pointer pointer-disabled"></i>
            <i className="fa-solid fa-chevron-right fa-lg pointer pointer-disabled"></i>
          </>
        ) : (
          <>
            <i
              className="fa-solid fa-angles-right fa-lg pointer"
              onClick={onAddAllToSelectedArray}
            ></i>
            <i
              className="fa-solid fa-chevron-right fa-lg pointer"
              onClick={() => onAddToSelectedArray(chosenDefault)}
            ></i>
          </>
        )}
        {selectedArray.length === 0 ? (
          <>
            <i className="fa-solid fa-chevron-left fa-lg pointer pointer-disabled"></i>
            <i className="fa-solid fa-angles-left fa-lg pointer pointer-disabled"></i>
          </>
        ) : (
          <>
            <i
              className="fa-solid fa-chevron-left fa-lg pointer"
              onClick={() => onAddToDefaultArray(chosenSelected)}
            ></i>
            <i
              className="fa-solid fa-angles-left fa-lg pointer"
              onClick={onDeleteAllFromSelectedArray}
            ></i>
          </>
        )}
      </TransferItemContainer>
      <TransferList>
        {selectedArray.map((data, index) => (
          <TransferListElement
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
  );
};

export default TransferListUI;
