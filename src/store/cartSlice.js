import { createSlice } from "@reduxjs/toolkit";
import { priceStringToNumber } from "../utils/price";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    replaceCart: (state, action) => {
      state.items = action.payload.items;
    },
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.product_id === newItem.product_id
      );
      if (!existingItem) {
        state.items.push({
          product_id: newItem.product_id,
          product_name: newItem.product_name,
          product_price: newItem.product_price,
          cart_cnt: 1,
          cart_product_amount: newItem.product_price,
        });
      } else {
        existingItem.cart_cnt++;

        const newAmount = new Intl.NumberFormat().format(
          priceStringToNumber(existingItem.cart_product_amount) +
            priceStringToNumber(existingItem.product_price)
        );
        existingItem.cart_product_amount = newAmount;
      }
    },
    deleteItemFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.product_id !== id);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
