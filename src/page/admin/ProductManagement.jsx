import React from "react";
import styled from "styled-components";
import { ProductTable } from "./ProductTable";
import H3Title from "../listStyledComponent/H3Title";
import AdminSidebar from "../../component/adminLayout/AdminSidebar";

function ProductManagement() {
  return (
    <ListWrap>
      <AdminSidebar />
      <div>
        <H3Title data-aos="fade-up">상품관리</H3Title>
        <ProductTable />
      </div>
    </ListWrap>
  );
}

export default ProductManagement;

const ListWrap = styled.div`
  display: flex;
  padding: 200px 0 0 0;
  width: 1600px;
  margin: 0 auto;
`;
