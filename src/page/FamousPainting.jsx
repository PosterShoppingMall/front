import React from "react";
import ListPageFilter from "./ListPageComponent/ListPageFilter";
import ListPageItem from "./ListPageComponent/ListPageItem";
import "aos/dist/aos.css";
import styled from "styled-components";
import ListPagination from "./ListPageComponent/ListPagination";
import ListWrap from "./listStyledComponent/ListWrap";
import H3Title from "./listStyledComponent/H3Title";

const FamousPainting = () => {
  return (
    <ListWrap>
      <H3Title data-aos="fade-up">명화</H3Title>
      <ListPageFilter />
      <ListPageItem />
    </ListWrap>
  );
};

export default FamousPainting;
