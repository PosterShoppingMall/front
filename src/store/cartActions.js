import { cartActions } from "./cartSlice";

export const sendDataToServer = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://dummyshopping-1357c-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();

      return data;
    };
  };
};
