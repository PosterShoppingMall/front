import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cartApi = createApi({
  reducerPath: "cart",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints(builder) {
    return {
      fetchCart: builder.query({
        query: () => {
          return {
            url: "cart",
            method: "GET",
          };
        },
      }),
      addItemToCart: builder.mutation({
        query: (body) => {
          return {
            url: "cart",
            method: "POST",
            body: body,
          };
        },
      }),
      deleteItemFromCart: builder.mutation({
        query: (id) => {
          return {
            url: `cart/${id}`,
            method: "DELETE",
          };
        },
      }),
      patchItemCountInCart: builder.mutation({
        query: (params) => {
          return {
            url: `cart/${params.id}`,
            method: "PATCH",
            body: params.body,
          };
        },
      }),
    };
  },
});

export const {
  useFetchCartQuery,
  useAddItemToCartMutation,
  useDeleteItemFromCartMutation,
  usePatchItemCountInCartMutation,
} = cartApi;
export { cartApi };
