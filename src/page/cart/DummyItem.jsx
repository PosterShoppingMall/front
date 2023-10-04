import { StyledCartItems } from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { priceStringToNumber } from "../../utils/price";
import { postCartData } from "../../store/cartActions";
const DummyItem = ({
  product_id,
  product_name,
  product_price,
  cart_cnt,
  cart_product_amount,
  ...rest
}) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart.items.length);

  const addClickHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        product_id,
        product_name,
        product_price,
      })
    );

    if (cart.items.length === 0) {
      console.log("addd");
      postCartData(cart);
      return;
    }
  };
  return (
    <StyledCartItems>
      <div className="image-wrapper">
        <img src="" alt="item-image" />
      </div>
      <div>{product_name}</div>
      <div>{product_price}</div>
      <div className="count-btn">
        <button onClick={addClickHandler}>add</button>
      </div>
    </StyledCartItems>
  );
};

export default DummyItem;
