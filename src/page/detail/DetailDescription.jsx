import React from "react";
import styled from "styled-components";

const DetailDescription = () => {
  return (
    <DescriptionWrap>
      <DescriptionText>
        도톰한 재질의 프리미얼 독일산 수입지에 인쇄된 포스터는 포스터만의 선명한
        <br />
        색감과 생동감을 선사합니다.
      </DescriptionText>

      <InforText>
        <List>Title: Monday</List>
        <List>Size: A1(59.4 x 84.1cm), A2(42 x 59.4cm)</List>
        <List>Print: Giclee Print</List>
        <List>Paper: German Premium Matte Paper 240g</List>
      </InforText>

      <ShippingInfor>
        <Text>7만원 이상 구매 시 무료 배송</Text>
        <Text>
          주문 제작 상품의 경우 발주 확인 후 취소 및 교환, 환불이 불가합니다.
        </Text>
        <Text>포스터 단품은 발주 확인 후 인쇄하여 2~3일 내 발송합니다.</Text>
        <Text>
          액자 제작 상품은 제작 및 발송까지 영업일 기준 5~7일 소요됩니다.
        </Text>
      </ShippingInfor>
    </DescriptionWrap>
  );
};

export default DetailDescription;
const DescriptionWrap = styled.div``;

const DescriptionText = styled.div`
  font-family: "NanumSquare";
  font-weight: 400;
  font-size: 15px;
  color: #333;
  line-height: 140%;
`;

const InforText = styled.div`
  font-family: "NanumSquare";
  font-weight: 400;
  font-size: 14px;
  color: #333;
  padding: 40px 0 0 0;
`;

const List = styled.div`
  padding-bottom: 15px;
`;

const ShippingInfor = styled.div`
  font-family: "NanumSquare";
  font-weight: 400;
  font-size: 14px;
  color: #333;
  padding: 40px 0 20px 0;
  position: relative;
  &::after {
    content: "";
    width: 100px;
    height: 1px;
    background: #000;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const Text = styled.div`
  padding: 0 0 15px 10px;
  position: relative;
  &::before {
    content: "*";
    font-family: "NanumSquare";
    font-size: 13px;
    font-weight: 400;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
