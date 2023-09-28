import styled from "styled-components";

const CartItem = ({ name, price, count, total, ...rest }) => {
  return (
    <StyledCartItems>
      <div className="image-wrapper">
        <img src="" alt="item-image" />
      </div>
      <div>{name}</div>
      <div>{price}</div>
      <div className="count-btn">
        <button>+</button>
        <div>{count}</div>
        <button>-</button>
      </div>
      <div> {total}</div>
    </StyledCartItems>
  );
};

export default CartItem;

const StyledCartItems = styled.div`
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
