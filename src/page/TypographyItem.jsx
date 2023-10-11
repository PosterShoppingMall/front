import React from "react";
import ListPageFilter from "./ListPageComponent/ListPageFilter";
import ListPageItem from "./ListPageComponent/ListPageItem";
import "aos/dist/aos.css";
import ListWrap from "./listStyledComponent/ListWrap";
import H3Title from "./listStyledComponent/H3Title";
import ListPagination from "./ListPageComponent/ListPagination";

const TypographyItem = () => {
  return (
    <ListWrap>
      <H3Title data-aos="fade-up">타이포그래피</H3Title>
      <ListPageFilter />
      <ListPageItem />
    </ListWrap>
  );
};

export default TypographyItem;
