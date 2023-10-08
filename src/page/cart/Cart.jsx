import styled from "styled-components";

import CartOrder from "./CartOrder";
import CartItem from "./CartItem";
import DummyItemList from "./DummyItemList";

import {
  numberToFormattedPriceString,
  priceStringToNumber,
} from "../../utils/price";

import { useFetchCartQuery } from "../../store";
import { transformCartData } from "../../utils/transformCartData";
const Cart = () => {
  const { data, error, isLoading } = useFetchCartQuery();
  let content = null;
  let totalAmount = null;
  if (!isLoading) {
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
    // totalAmount = cartData.items.reduce((acc, cur) => {
    //   console.log(acc);
    //   return acc + cur.count * cur.price;
    // });
  }

  return (
    <>
      <DummyItemList />
      <StyledCart>
        <div className="wrapper">
          <div className="page-title">장바구니</div>
          <div className="content">
            <div className="cart-items">{content}</div>
            <CartOrder totalAmount={totalAmount} />
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
