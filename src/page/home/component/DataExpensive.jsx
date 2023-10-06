import React from "react";

const DataExpensive = ({ item, key }) => {
  return (
    <div key={key}>
      <h2>Title: {item.title}</h2>
      <h2>Amount: {item.amount}</h2>
      <h2>imgSrc: {item.imgSrc}</h2>
    </div>
  );
};

export default DataExpensive;
