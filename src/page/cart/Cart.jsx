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
      <ListWrap>
        <div className="wrapper">
          <H3Title>장바구니</H3Title>
          <div className="content">
            <div className="cart-items">{content}</div>
            <CartOrder totalAmount={totalAmount} />
          </div>
        </div>
      </ListWrap>
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
    width: 1600px;
    height: 100vh;
    margin: auto;
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
const ListWrap = styled.div`
  padding: 200px 0 0 0;
  width: 1600px;
  margin: 0 auto;
`;

const H3Title = styled.div`
  font-family: "BMHANNAPro";
  font-size: 40px;
  text-align: center;
  padding: 50px 0 50px 0;
  box-sizing: border-box;
  border-top: solid 2px #333;
  border-bottom: solid 2px #333;
  margin-bottom: 30px;
`;
