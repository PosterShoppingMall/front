import styled from "styled-components";

const CartOrder = ({ totalAmount }) => {
  return (
    <div className="order-info">
      <div>{totalAmount}</div>
      <div>
        <CommonButton>주문하기</CommonButton>
      </div>
    </div>
  );
};

export default CartOrder;

const CommonButton = styled.button`
  background: #000;
  border: none;
  padding: 20px 50px;
  box-sizing: border-box;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
`;
