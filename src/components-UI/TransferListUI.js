import React from "react";

import randomData from "../utils/randomData";

const TransferListUI = () => {
  return (
    <>
      {randomData.map((data) => (
        <div>{data.name}</div>
      ))}
    </>
  );
};

export default TransferListUI;
