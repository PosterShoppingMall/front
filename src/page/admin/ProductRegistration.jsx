import React from "react";
import styled from "styled-components";
import H3Title from "../listStyledComponent/H3Title";
import ProductForm from "./ProductForm";
import AdminSidebar from "../../component/adminLayout/AdminSidebar";

function ProductRegistration() {
  return (
    <ListWrap>
      <AdminSidebar />
      <div>
        <H3Title data-aos="fade-up">상품등록</H3Title>
        <ProductForm />
      </div>
    </ListWrap>
  );
}

export default ProductRegistration;

const ListWrap = styled.div`
  display: flex;
  padding: 200px 0 0 0;
  width: 1600px;
  margin: 0 auto;
`;
