import React from "react";
import ListPageFilter from "./ListPageComponent/ListPageFilter";
import ListPageItem from "./ListPageComponent/ListPageItem";
import "aos/dist/aos.css";
import ListPagination from "./ListPageComponent/ListPagination";
import ListWrap from "./listStyledComponent/ListWrap";
import H3Title from "./listStyledComponent/H3Title";

const AllItem = () => {
  return (
    <ListWrap>
      <H3Title data-aos="fade-up">전체상품</H3Title>
      <ListPageFilter />
      <ListPageItem />
    </ListWrap>
  );
};

export default AllItem;
