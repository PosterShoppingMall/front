import React from "react";
import ListPageFilter from "./ListPageComponent/ListPageFilter";
import ListPageItem from "./ListPageComponent/ListPageItem";
import "aos/dist/aos.css";
import ListPagination from "./ListPageComponent/ListpageNation";
import ListWrap from "./listStyledComponent/ListWrap";
import H3Title from "./listStyledComponent/H3Title";

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
