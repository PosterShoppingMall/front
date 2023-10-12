import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";

const PurchasePrice = () => {
  const [productTitle, setProductTitle] = useState(null);
  const [productPrice, setProductPrice] = useState(null);
  let { productId } = useParams();

  useEffect(() => {
    axios
      .get(`http://52.78.184.121:8080/369/product/${productId}`)
      .then((response) => {
        const data = response.data;
        const title = data.productName;
        setProductTitle(title);

        const price = data.productPrice;
        setProductPrice(price);

        console.log("매핑된 데이터", data);
      })
      .catch((error) => {
        console.error("데이터를 가져오는데 실패했습니다.", error);
      });
  }, [productId]);

  return (
    <>
      {productTitle && <Title>{productTitle}</Title>}
      {productPrice && <Amount>{productPrice}원</Amount>}
    </>
  );
};

export default PurchasePrice;
const Title = styled.div`
  font-family: "BMHANNAPro";
  font-size: 30px;

  @media all and (max-width: 1000px) {
    font-size: 25px;
  }
`;

const Amount = styled.div`
  font-family: "NanumSquare";
  font-weight: 400;
  font-size: 25px;
  padding: 20px 0 50px 0;
  color: #515050;

  @media all and (max-width: 1000px) {
    font-size: 20px;
  }
`;
