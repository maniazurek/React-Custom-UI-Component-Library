import React from "react";

import transferListData from "../utils/transferListData";

const TransferListUI = () => {
  return (
    <>
      {transferListData.map((data) => (
        <div>{data.name}</div>
      ))}
    </>
  );
};

export default TransferListUI;
