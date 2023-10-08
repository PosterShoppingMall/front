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
      <CartItemInfo>
        <CartItemTitle>{name}</CartItemTitle>
        <CartItemPrice>{numberToFormattedPriceString(price)}</CartItemPrice>

        <CartItemInfoFooter>
          <CartItemSelect className="element" id={id} count={count} />
          <CartDeleteItemButton
            className="element"
            onClick={deleteButtonHandler}
          >
            delete
          </CartDeleteItemButton>
          <CartItemTotalPrice className="element">
            {numberToFormattedPriceString(price * count)}
          </CartItemTotalPrice>
        </CartItemInfoFooter>
      </CartItemInfo>
    </StyledCartItems>
  );
};

export default CartItem;

export const StyledCartItems = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  gap: 3rem;
`;

const CartItemImage = styled.div`
  width: 15%;
  img {
    width: 100%;
  }
`;
const CartItemInfo = styled.div`
  width: 40%;
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
const CartItemTotalPrice = styled(CartItemPrice)`
  color: #000000;
  font-weight: 700;
`;

const CartDeleteItemButton = styled.div`
  cursor: pointer;
  color: #515050;
  font-family: "NanumSquare";
  font-weight: 400;
  font-size: 12px;

  &:hover {
    text-decoration: underline;
  }
`;

const CartItemInfoFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;

  .element {
    flex: 1;
  }
`;
