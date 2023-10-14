import { useFetchCartQuery } from "../../store";
import { transformCartData } from "../../utils/transformCartData";
import CartItem from "../cart/CartItem";
import OrderItem from "./OrderItem";
import styled from "styled-components";
const OrderItemList = () => {
  const { data, error, isLoading } = useFetchCartQuery();
  let content = null;
  if (!isLoading) {
    const cartData = transformCartData(data);

    const total = 0;
    content = cartData.items.map((item) => {
      return (
        <OrderItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          count={item.count}
        />
      );
    });
    return (
      <>
        <div>{content}</div>
        <TotalPrice>{total}원</TotalPrice>
      </>
    );
  }
};

export default OrderItemList;

const TotalPrice = styled.div`
  display: flex;
  text-align: center;
  justify-content: flex-end;
  padding-right: 100px;
  width: 100%;
  height: 50px;
  font-size: 20px;
  font-weight: 800;
  position: relative;
`;
