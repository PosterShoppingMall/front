import { StyledCartItems } from "./CartItem";
import { priceStringToNumber } from "../../utils/price";
import { useAddItemToCartMutation } from "../../store";
const DummyItem = ({ id, name, price, count, ...rest }) => {
  const [addItemToCart, results] = useAddItemToCartMutation();
  const user = { id: 1 };
  const body = {
    id: id,
    productId: id,
    productName: name,
    productPrice: price,
    cartCnt: 1,
    cartProductAmount: price * count,
  };

  const addItemHandler = () => {
    addItemToCart(body);
    console.log(results);
  };
  return (
    <StyledCartItems>
      <div className="image-wrapper">
        <img src="" alt="item-image" />
      </div>
      <div>{name}</div>
      <div>{price}</div>
      <div className="count-btn">
        <button onClick={addItemHandler}>add</button>
      </div>
    </StyledCartItems>
  );
};

export default DummyItem;
