import React from "react";
import styled from "styled-components";
import "aos/dist/aos.css";
import selectArrow from "../../../images/selectArrow.png";

const ListPageFilter = ({ setFilter, defaultFilter }) => {
  const handleFilterChange = (event) => {
    setFilter(event.target.value); // 선택한 필터 값을 상위 컴포넌트로 전달
  };

  console.log("defaultFilter", defaultFilter);

  return (
    <FilterSelect data-aos="fade-up">
      <select onChange={handleFilterChange} defaultValue={defaultFilter}>
        <option value="best">인기순</option>
        <option value="priceDesc">가격높은순</option>
        <option value="priceAsc">가격낮은순</option>
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
