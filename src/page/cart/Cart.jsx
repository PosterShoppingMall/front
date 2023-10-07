import styled from "styled-components";
import CartOrder from "./CartOrder";
import CartItem from "./CartItem";
import {
  numberToFormattedPriceString,
  priceStringToNumber,
} from "../../utils/price";

import DummyItemList from "./DummyItemList";
import { useFetchCartQuery } from "../../store";
import { transformCartData } from "../../utils/transformCartData";
const Cart = () => {
  const { data, error, isLoading } = useFetchCartQuery();
  let content = null;
  if (!isLoading) {
    console.log(data);
    const cartData = transformCartData(data);
    content = cartData.items.map((item) => {
      return (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          count={item.count}
        />
      );
    });
  }
  // if (cartItems.length !== 0) {
  //   totalAmount = cartItems
  //     ?.map((item) => priceStringToNumber(item.cart_product_amount))
  //     .reduce((acc, cur) => {
  //       return (acc += cur);
  //     });
  //   totalAmountformattedString = numberToFormattedPriceString(totalAmount);
  // }
  return (
    <>
      <DummyItemList />
      <StyledCart>
        <div className="wrapper">
          <div className="page-title">장바구니</div>
          <div className="content">
            <div className="cart-items">{content}</div>
          </div>
        </div>
      </StyledCart>
    </>
  );
};

export default Cart;

export const StyledCart = styled.div`
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80vw;
    height: 100vh;
    margin: auto;
  }

  .page-title {
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    width: 20vw;
    height: 20vh;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 10rem;
  }

  .cart-items {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
  }
`;
