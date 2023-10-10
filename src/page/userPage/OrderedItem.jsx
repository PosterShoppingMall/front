import React from "react";
import styled from "styled-components";
import { numberToFormattedPriceString } from "../../utils/price";

const OrderedItem = ({ id, name, price, count, orderDate }) => {
  return (
    <StyledOrderItem>
      <OrderItemName>{name}</OrderItemName>

      <OrderItemDetail>
        <OrderItemDate>Order Date: {orderDate}</OrderItemDate>
        <OrderPrice>Price: {numberToFormattedPriceString(price)}</OrderPrice>
        <OrderQuantity>Quantity: {count}</OrderQuantity>
        <OrderTotalPrice>
          Total: {numberToFormattedPriceString(price * count)}
        </OrderTotalPrice>
      </OrderItemDetail>
    </StyledOrderItem>
  );
};

export default OrderedItem;

export const StyledOrderItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #ddd;
`;

const OrderItemName = styled.h2`
  margin-bottom: 1rem;
`;

const OrderItemDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

const OrderItemDate = styled.p`
  margin-bottom: 0.5rem;
`;

const OrderPrice = styled.p`
  margin-bottom: 0.5rem;
`;

const OrderQuantity = styled.p`
  margin-bottom: 0.5rem;
`;

const OrderTotalPrice = styled.p`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;
