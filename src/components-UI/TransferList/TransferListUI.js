import React, { useState } from "react";
import transferListData from "../../utils/transferListData";

const TransferListUI = () => {
  const [selected, setSelected] = useState(null);
  const [defaultArray, setDefaultArray] = useState(transferListData);
  const [selectedArray, setSelectedArray] = useState([]);

  const onSelect = (index) => {
    setSelected(index);
  };

  const onAddToSelectedArray = (selected) => {
    setDefaultArray(
      defaultArray.filter((item) => defaultArray.indexOf(item) !== selected)
    );
    setSelectedArray([...selectedArray, defaultArray[selected]]);
  };

  const onAddToDefaultArray = (selected) => {
    setSelectedArray(
      selectedArray.filter((item) => selectedArray.indexOf(item) !== selected)
    );
    setDefaultArray([...defaultArray, selectedArray[selected]]);
  };

  return (
    <>
      {defaultArray.map((data, index) => (
        <div onClick={() => onSelect(index)}>{data.name}</div>
      ))}
      <div onClick={() => onAddToSelectedArray(selected)}>add</div>
      <div onClick={() => onAddToDefaultArray(selected)}>remove</div>
      {selectedArray.map((data, index) => (
        <div onClick={() => onSelect(index)}>{data.name}</div>
      ))}
    </>
  );
};

export default TransferListUI;
