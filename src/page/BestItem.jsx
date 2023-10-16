import React from "react";
import ListPageFilter from "./ListPageComponent/ListPageFilter";
import ListPageItem from "./ListPageComponent/ListPageItem";
import "aos/dist/aos.css";
import styled from "styled-components";
import ListPagination from "./ListPageComponent/ListpageNation";

const BestItem = () => {
  return (
    <ListWrap>
      <H3Title data-aos="fade-up">베스트</H3Title>
      <ListPageFilter />
      <ListPageItem />
      <ListPagination />
    </ListWrap>
  );
};

export default BestItem;
const ListWrap = styled.div`
  padding: 200px 0 0 0;
  width: 1600px;
  margin: 0 auto;
`;

const H3Title = styled.div`
  font-family: "BMHANNAPro";
  font-size: 40px;
  text-align: center;
  padding: 50px 0 50px 0;
  box-sizing: border-box;
  border-top: solid 2px #333;
  border-bottom: solid 2px #333;
  margin-bottom: 30px;
`;
