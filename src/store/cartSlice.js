import { createSlice } from "@reduxjs/toolkit";
import { priceStringToNumber } from "../utils/price";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    quantity: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      console.log(newItem);
      const existingItem = state.items.find(
        (item) => item.product_id === newItem.product_id
      );
      if (!existingItem) {
        console.log("!ex");
        state.items.push({
          product_id: newItem.product_id,
          product_name: newItem.product_name,
          product_price: newItem.product_price,
          cart_cnt: 1,
          cart_product_amount: newItem.product_price,
        });
        console.log(state.items);
        state.quantity++;
      } else {
        existingItem.cart_cnt++;

        const newAmount = new Intl.NumberFormat().format(
          priceStringToNumber(existingItem.cart_product_amount) +
            priceStringToNumber(existingItem.product_price)
        );
        existingItem.cart_product_amount = newAmount;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
