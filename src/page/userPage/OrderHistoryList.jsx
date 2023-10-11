import { useFetchOrderHistoryQuery } from "../../store/orderHistoryApi";
import { transformOrderHistoryData } from "../../utils/transformOrderHistoryData";
import OrderedItem from "../userPage/OrderedItem";

const OrderHistoryList = () => {
  const { data = [], error, isLoading } = useFetchOrderHistoryQuery();

  let content;

  if (data.length > 0) {
    const orderHistoryData = transformOrderHistoryData(data);

    if (orderHistoryData && orderHistoryData.orders) {
      content = orderHistoryData.orders.map((order) => (
        <OrderedItem
          key={order.id}
          id={order.id}
          name={
            Array.isArray(order.itemList) && order.itemList[0]
              ? order.itemList[0].itemName
              : "N/A"
          }
          price={order.totalPrice}
          count={
            Array.isArray(order.itemList) && order.itemList[0]
              ? order.itemList[0].quantity
              : "N/A"
          }
          date={new Date(order.orderDate).toLocaleDateString()}
        />
      ));
    }
  } else if (error) {
    content = <div>Error occurred while fetching data</div>;
  }

  return <div>{content}</div>;
};

export default OrderHistoryList;
