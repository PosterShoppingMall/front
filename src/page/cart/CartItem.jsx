import styled from "styled-components";

const CartItem = ({
  product_name,
  product_price,
  cart_cnt,
  cart_product_amount,
  ...rest
}) => {
  return (
    <StyledCartItems>
      <div className="image-wrapper">
        <img src="" alt="item-image" />
      </div>
      <div>{product_name}</div>
      <div>{product_price}</div>
      <div className="count-btn">
        <button>+</button>
        <div>{cart_cnt}</div>
        <button>-</button>
      </div>
      <div> {cart_product_amount}</div>
      <button>delete</button>
    </StyledCartItems>
  );
};

export default CartItem;

export const StyledCartItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  .count-btn {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
