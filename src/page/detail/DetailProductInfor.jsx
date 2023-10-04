import React from "react";
import styled from "styled-components";
import Images from "../../component/Images";
import productImg01 from "../../images/productImg01.png";
import productImg02 from "../../images/productImg02.jpg";

const DetailProductInfor = () => {
  return (
    <>
      <ProductInforTitle>상품설명</ProductInforTitle>
      <ProductInforContents>
        <Images imgSrc={productImg01} />
        <Images imgSrc={productImg02} />
        <Images imgSrc={productImg01} />
        <Images imgSrc={productImg02} />
        <Images imgSrc={productImg01} />
        <Images imgSrc={productImg02} />
        <Images imgSrc={productImg01} />
      </ProductInforContents>
    </>
  );
};

export default DetailProductInfor;
const ProductInforTitle = styled.div`
  padding: 200px 0 30px 0;
  font-family: "NanumSquare";
  font-size: 30px;
  font-weight: 700;
  color: #333;
  text-align: center;
  box-sizing: border-box;
  border-bottom: solid 2px #333;
`;

const ProductInforContents = styled.div``;
