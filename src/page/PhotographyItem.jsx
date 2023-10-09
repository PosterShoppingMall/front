import React from "react";
import ListPageFilter from "./ListPageComponent/ListPageFilter";
import ListPageItem from "./ListPageComponent/ListPageItem";
import "aos/dist/aos.css";
import ListPagination from "./ListPageComponent/ListPagination";
import ListWrap from "./listStyledComponent/ListWrap";
import H3Title from "./listStyledComponent/H3Title";

const PhotoItem = () => {
  return (
    <ListWrap>
      <H3Title data-aos="fade-up">포토그래피</H3Title>
      <ListPageFilter />
      <ListPageItem />
      <ListPagination />
    </ListWrap>
  );
};

export default PhotoItem;
