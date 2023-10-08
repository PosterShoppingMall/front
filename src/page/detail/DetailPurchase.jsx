import React from "react";
import styled from "styled-components";
import PurchasePrice from "./PurchasePrice";
import DetailDescription from "./DetailDescription";
import PurchaseComponent from "./PurchaseComponent";

const DetailPurchase = () => {
  return (
    <PurchaseContents>
      <PurchasePrice />
      <DetailDescription />
      <PurchaseComponent />
    </PurchaseContents>

    //   <ProductInforWrap>

    //   </ProductInforWrap>
  );
};

export default DetailPurchase;
const PurchaseContents = styled.div`
  font-family: "NanumSquare";
  font-weight: 700;
  width: 55%;
  height: auto;
  padding: 60px 0 0 50px;

  @media all and (max-width: 1000px) {
    width: 100%;
    padding: 150px 20px 0px 20px;
    box-sizing: border-box;
  }
`;

const ProductInforWrap = styled.div`
  width: 100%;
  padding: 50px 0 0 0;
  display: block;
`;
