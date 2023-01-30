import React from "react";

import randomData from "../../utils/checkboxData";

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
