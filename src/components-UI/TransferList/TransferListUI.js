import React, { useState } from "react";
import transferListData from "../../utils/transferListData";
import {TransferListContainer, TransferList, TransferListElement, TransferItemContainer} from "./TransferListStyles"

const TransferListUI = () => {
  const [selected, setSelected] = useState(0);
  const [defaultArray, setDefaultArray] = useState(transferListData);
  const [selectedArray, setSelectedArray] = useState([]);

  const onAddToSelectedArray = (selected) => {
    if (selected >= 0) {
      setDefaultArray(
        defaultArray.filter((item) => defaultArray.indexOf(item) !== selected)
      );
      setSelectedArray([...selectedArray, defaultArray[selected]]);
    }
  };

  const onAddToDefaultArray = (selected) => {
    if (selected > 0) {
      setSelectedArray(
        selectedArray.filter((item) => selectedArray.indexOf(item) !== selected)
      );
      setDefaultArray([...defaultArray, selectedArray[selected]]);
    } else if (selected === 0) {
      setSelectedArray(selectedArray);
      setDefaultArray(defaultArray);
    }
  };

  const onAddAllToSelectedArray = () => {
    setDefaultArray([]);
    setSelectedArray(defaultArray);
  };

  const onDeleteAllFromSelectedArray = () => {
    setSelectedArray([]);
    setDefaultArray(defaultArray);
  };

  console.log(selected);

  return (
    <TransferListContainer>
      <TransferList>
        {defaultArray.map((data, index) => (
          <TransferListElement
            clicked={index === selected && "clicked"}
            onClick={() => setSelected(index)}
          >
            {data.name}
          </TransferListElement>
        ))}
      </TransferList>
      <TransferItemContainer>
        <i
          class="fa-solid fa-angles-right fa-lg pointer"
          onClick={onAddAllToSelectedArray}
        ></i>
        <i
          class="fa-solid fa-chevron-right fa-lg pointer"
          onClick={() => onAddToSelectedArray(selected)}
        ></i>

        <i
          class="fa-solid fa-chevron-left fa-lg pointer"
          onClick={() => onAddToDefaultArray(selected)}
        ></i>
        <i
          class="fa-solid fa-angles-left fa-lg pointer"
          onClick={onDeleteAllFromSelectedArray}
        ></i>
      </TransferItemContainer>
      <TransferList>
        {selectedArray.map((data, index) => (
          <TransferListElement
            clicked={index === selected && "clicked"}
            onClick={() => setSelected(index)}
          >
            {data.name}
          </TransferListElement>
        ))}
      </TransferList>
    </TransferListContainer>
  );
};

export default TransferListUI;
