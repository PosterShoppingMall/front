import styled from "styled-components";

import { useDeleteItemFromCartMutation } from "../../store";

import { numberToFormattedPriceString } from "../../utils/price";

import DetailBn01 from "../../images/DetailBn01.jpg";
import CartItemSelect from "./CartItemSelect";
const CartItem = ({ id, name, price, count }) => {
  //카트에석 삭제
  const [deleteItemFromCart, deleteResults] = useDeleteItemFromCartMutation();
  const deleteButtonHandler = () => {
    deleteItemFromCart(id);
  };
  return (
    <StyledCartItems>
      <CartItemImage>
        <img src={DetailBn01} alt="item-image" />
      </CartItemImage>
      {/* name, price count amount button handler */}
      <CartItemInfo>
        <CartItemTitle>{name}</CartItemTitle>
        <CartItemPrice>{numberToFormattedPriceString(price)}</CartItemPrice>

        <CartItemSelect id={id} count={count} />

        <CartItemPrice>
          {numberToFormattedPriceString(price * count)}
        </CartItemPrice>
        <button onClick={deleteButtonHandler}>delete</button>
      </CartItemInfo>
    </StyledCartItems>
  );
};

export default CartItem;

export const StyledCartItems = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  gap: 3rem;
`;

const CartItemInfo = styled.div`
  width: 40%;
`;

const CartItemImage = styled.div`
  width: 15%;
  img {
    width: 100%;
  }
`;

const CartItemTitle = styled.div`
  font-family: "BMHANNAPro";
  font-size: 20px;
`;
const CartItemPrice = styled.div`
  font-family: "NanumSquare";
  font-weight: 400;
  font-size: 16px;
  padding: 20px 0 50px 0;
  color: #515050;
`;
