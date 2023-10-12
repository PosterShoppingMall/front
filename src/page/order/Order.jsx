import OrderButton from "./OrderButton";
import OrderItemList from "./OrderItemList";
import OrderUserInfo from "./OrderUserInfo";
import styled from "styled-components";
const Order = () => {
  return (
    <ListWrap>
      <H3Title>주문하기</H3Title>
      <OrderItemList />
      <OrderUserInfo />
      <OrderButton />
      <div></div>
    </ListWrap>
  );
};

export default Order;
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

const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 200px 0 0 0;
  width: 1200px;
  margin: 0 auto;
`;
