import React from "react";
import styled from "styled-components";

const OrderTotalPrice = () => {
  return <TotalPrice>100,000원</TotalPrice>;
};

export default OrderTotalPrice;

const TotalPrice = styled.div`
  display: flex;
  text-align: center;
  justify-content: flex-end;
  padding-right: 100px;
  width: 100%;
  height: 50px;
  font-size: 20px;
  font-weight: 800;
  position: relative;
`;
