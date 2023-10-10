import React from "react";
import styled from "styled-components";
import { ProductTable } from "./ProductTable";
import H3Title from "../listStyledComponent/H3Title";

function ProductManagement() {
  return (
    <ListWrap>
      <H3Title data-aos="fade-up">상품관리</H3Title>
      <ProductTable />
    </ListWrap>
  );
}

const ListWrap = styled.div`
  padding: 200px 0 0 0;
  width: 1600px;
  margin: 0 auto;
`;

export default ProductManagement;
