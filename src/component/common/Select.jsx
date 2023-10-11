import React from "react";
import styled from "styled-components";

const SelectBox = styled.div`
  padding: 5px 0 0 0;
  display: flex;
  justify-content: flex-start;
  span.title {
    width: 15%;
    font-family: "NanumSquare";
    font-weight: 700;
    font-size: 18px;
    padding: 7px 10px 0 0;
  }
  select {
    width: 80%;
    padding: 7px 5px;
    box-sizing: border-box;
  }
`;

const Select = ({ title, name, value, onChange, children }) => {
  return (
    <SelectBox>
      <span className="title">{title}</span>
      <select name={name} value={value} onChange={onChange}>
        {children}
      </select>
    </SelectBox>
  );
};

export default Select;
