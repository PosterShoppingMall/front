import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { cartApi } from "./cartApi";
import { orderHistoryApi } from "./orderHistoryApi";

const store = configureStore({
  reducer: {
    [cartApi.reducerPath]: cartApi.reducer,
    [orderHistoryApi.reducerPath]: orderHistoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      cartApi.middleware,
      orderHistoryApi.middleware
    );
  },
});

setupListeners(store.dispatch);
export default store;
export {
  useFetchCartQuery,
  useAddItemToCartMutation,
  useDeleteItemFromCartMutation,
  usePatchItemCountInCartMutation,
  usePatchEmptyCartMutation,
} from "./cartApi";
