import { StyledCartItems } from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { priceStringToNumber } from "../../utils/price";
const DummyItem = ({
  product_id,
  product_name,
  product_price,
  cart_cnt,
  cart_product_amount,
  ...rest
}) => {
  const dispatch = useDispatch();

  const addClickHandler = () => {
    const postCartItem = async () => {
      //카트 비어있는 경우부터
      const request = fetch(
        "https://dummyshopping-1357c-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "POST",
          body: JSON.stringify({
            cart_id: 1,
            items: {
              product_id: Number(product_id),
              product_name: product_name,
              product_price: priceStringToNumber(product_price),
              cart_cnt: 1,
              cart_produc_amount: priceStringToNumber(product_price),
            },
          }),
        }
      );
    };
    postCartItem();
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
