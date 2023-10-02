import { useDispatch } from "react-redux";
import styled from "styled-components";
import { cartActions } from "../../store/cartSlice";

const CartItem = ({
  product_id,
  product_name,
  product_price,
  cart_cnt,
  cart_product_amount,
  ...rest
}) => {
  const dispatch = useDispatch();
  const deleteButtonHandler = () => {
    dispatch(cartActions.deleteItemFromCart(product_id));
  };
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
      <button onClick={deleteButtonHandler}>delete</button>
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
