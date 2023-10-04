import React from "react";
import styled from "styled-components";
import selectArrow from "../../images/selectArrow.png";

const ListPageFilter = () => {
  return (
    <FilterSelect>
      <select>
        <option>인기순</option>
        <option>최신순으로정렬</option>
        <option>가격높은순</option>
        <option>가격낮은순</option>
        <option>날짜순</option>
      </select>
    </FilterSelect>
  );
};

export default ListPageFilter;
const FilterSelect = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 50px;
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 12px 30px 12px 30px;
    box-sizing: border-box;
    border-radius: 5px;
    border: solid 1px #fff;
    background: url(${selectArrow}) no-repeat 90% 16px rgba(152, 149, 149, 1);
    background-size: 13px;
    cursor: pointer;
    color: #fff;
    font-size: 17px;
  }
`;
