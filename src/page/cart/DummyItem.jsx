import { StyledCartItems } from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartSlice";
const DummyItem = ({
  product_id,
  product_name,
  product_price,
  cart_count,
  cart_product_amount,
  ...rest
}) => {
  const dispatch = useDispatch();

  const addClickHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        product_id,
        product_name,
        product_price,
      })
    );
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
