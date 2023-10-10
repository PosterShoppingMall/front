import Select from "../../component/common/Select";
import { usePatchItemCountInCartMutation } from "../../store";

const CartItemSelect = ({ id, count }) => {
  const [patchItemCountInCart, results] = usePatchItemCountInCartMutation();

  const itemCountChangeHandler = (event, id) => {
    const params = {
      id: id,
      body: {
        cartCnt: event.target.value,
      },
    };
    patchItemCountInCart(params);
  };

  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((elem) => {
    return (
      <option key={elem} value={elem}>
        {elem}
      </option>
    );
  });
  return (
    <Select
      title={"수량"}
      name="item-count"
      value={count}
      onChange={(event) => {
        itemCountChangeHandler(event, id);
      }}
    >
      {options}
    </Select>
  );
};

export default CartItemSelect;
