import OrderButton from "./OrderButton";
import OrderItemList from "./OrderItemList";
import OrderUserInfo from "./OrderUserInfo";

const Order = () => {
  return (
    <div className="wrapper">
      <OrderItemList />
      <OrderUserInfo />
      <OrderButton />
    </div>
  );
};

export default Order;
