import styled from "styled-components";
import { usePatchEmptyCartMutation } from "../../store";

const OrderButton = () => {
  const [patchEmptyCart, results] = usePatchEmptyCartMutation();
  const buttonClickHandler = () => {
    patchEmptyCart();
    console.log("click");
  };
  return <CommonButton onClick={buttonClickHandler}>결제하기</CommonButton>;
};

const CommonButton = styled.button`
  background: #000;
  border: none;
  padding: 20px 50px;
  box-sizing: border-box;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
`;

export default OrderButton;
