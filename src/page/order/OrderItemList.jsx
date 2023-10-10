import { useFetchCartQuery } from "../../store";
import { transformCartData } from "../../utils/transformCartData";
import CartItem from "../cart/CartItem";
const OrderItemList = () => {
  const { data, error, isLoading } = useFetchCartQuery();
  let content = null;
  if (!isLoading) {
    const cartData = transformCartData(data);
    content = cartData.items.map((item) => {
      return (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          count={item.count}
        />
      );
    });
    return <div>{content}</div>;
  }
};

export default OrderItemList;
