import styled from "styled-components";
import {
  useDeleteItemFromCartMutation,
  usePatchItemCountInCartMutation,
} from "../../store";

const CartItem = ({ id, name, price, count }) => {
  // 수량변경
  const [patchItemCountInCart, patchResults] =
    usePatchItemCountInCartMutation();
  const itemCountButtonHandler = (id, action) => {
    let change;
    if (action === "add") {
      change = 1;
    } else if (action === "minus") {
      change = -1;
    }
    const params = {
      id: id,
      body: {
        cart_cnt: `${Number(count) + change}`,
      },
    };
    patchItemCountInCart(params);
  };
  //카트에석 삭제
  const [deleteItemFromCart, deleteResults] = useDeleteItemFromCartMutation();
  const deleteButtonHandler = () => {
    deleteItemFromCart(id);
  };
  return (
    <StyledCartItems>
      <div className="image-wrapper">
        <img src="" alt="item-image" />
      </div>
      {/* name, price count amount button handler */}
      <div>{name}</div>
      <div>{price}</div>
      <div className="count-btn">
        <button
          onClick={() => {
            itemCountButtonHandler(id, "add");
          }}
        >
          +
        </button>
        <div>{count}</div>
        <button
          onClick={() => {
            itemCountButtonHandler(id, "minus");
          }}
        >
          -
        </button>
      </div>
      <div> {price * count}</div>
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
