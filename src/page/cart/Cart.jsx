import styled from "styled-components";
import CartOrder from "./CartOrder";
import CartItem from "./CartItem";
import {
  numberToFormattedPriceString,
  priceStringToNumber,
} from "../../utils/price";
const Cart = () => {
  const items = [
    {
      product_id: 3,
      product_name: "Ritual",
      product_price: "250,000",
      cart_cnt: "2",
      cart_product_amount: "500,000",
    },
    {
      product_id: 8,
      product_name: "Stephanie Blau",
      product_price: "34,000",
      cart_cnt: "1",
      cart_product_amount: "34,000",
    },
  ];
  const totalAmount = items
    .map((item) => priceStringToNumber(item.cart_product_amount))
    .reduce((acc, cur) => {
      return (acc += cur);
    });
  const totalAmountformattedString = numberToFormattedPriceString(totalAmount);
  return (
    <StyledCart>
      <div className="wrapper">
        <div className="page-title">장바구니</div>
        <div className="content">
          <div className="cart-items">
            {items.map((item) => {
              return (
                <CartItem
                  key={item.product_id}
                  name={item.product_name}
                  price={item.product_price}
                  count={item.cart_cnt}
                  total={item.cart_product_amount}
                />
              );
            })}
          </div>
          <CartOrder totalAmount={totalAmountformattedString} />
        </div>
      </div>
    </StyledCart>
  );
};

export default Cart;

const StyledCart = styled.div`
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
