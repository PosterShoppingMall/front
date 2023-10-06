import React from "react";

const DataExpensive = ({ id, title, amount }) => {
  return (
    <div key={id}>
      <h2>Title: {title}</h2>
      <p>Amount: {amount}</p>
    </div>
  );
};

export default DataExpensive;
