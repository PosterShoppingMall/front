import React from "react";
import styled from "styled-components";

const PurchasePrice = () => {
  return (
    <>
      <Title>[souffle]Monday</Title>
      <Amount>32,000원</Amount>
    </>
  );
};

export default PurchasePrice;
const Title = styled.div`
  font-family: "BMHANNAPro";
  font-size: 30px;
`;

const Amount = styled.div`
  font-family: "NanumSquare";
  font-weight: 400;
  font-size: 25px;
  padding: 20px 0 50px 0;
  color: #515050;
`;
