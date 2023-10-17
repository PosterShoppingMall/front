import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";

const DetailDescription = () => {
  const [productTitle, setProductTitle] = useState(null);
  const [productSize, setProductSize] = useState(null);
  const [productContent, setproductContent] = useState(null);

  let { productId } = useParams();

  useEffect(() => {
    axios
      .get(`http://52.78.184.121:8080/369/product/${productId}`)
      .then((response) => {
        const data = response.data;
        const title = data.productName;
        setProductTitle(title);

        const size = data.productSize;
        setProductSize(size);

        const content = data.productContents;
        setproductContent(content);

        console.log("매핑된 데이터", data);
      })
      .catch((error) => {
        console.error("데이터를 가져오는데 실패했습니다.", error);
      });
  }, [productId]);

  return (
    <DescriptionWrap>
      {productContent && <DescriptionText>{productContent}</DescriptionText>}

      <InforText>
        {productTitle && <List>Title:{productTitle}</List>}
        {productSize && <List>Size:{productSize}</List>}
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
