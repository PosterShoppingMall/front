export const transformOrderHistoryData = (data) => {
  const transformedData = data.map((order) => {
    return {
      id: order.orderId,
      name: order.itemList[0].itemName,
      price: order.totalPrice,
      count: order.itemList[0].quantity,
      date: order.orderDate,
    };
  });
  return { orders: transformedData };
};
