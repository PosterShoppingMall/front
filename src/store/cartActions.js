import { cartActions } from "./cartSlice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("get 카트 에러");
      }

      const data = await response.json();

      return data;
    };

    const cartData = await fetchData();
    dispatch(
      cartActions.replaceCart({
        items: cartData.items || [],
      })
    );
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://dummyshopping-1357c-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("put/post 카트 오류");
      }
    };

    await sendRequest();
  };
};

export const postCartData = (cart) => {
  console.log("abcde");
  return async (dispatch) => {
    const postRequest = async () => {
      console.log("postpost");
      const response = await fetch(
        "https://dummyshopping-1357c-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "POST",
          body: JSON.stringify({
            items: cart.items,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("post 카트 오류");
      }
    };

    const cartdata = await postRequest();
  };
};
