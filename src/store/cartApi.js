import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cartApi = createApi({
  reducerPath: "cart",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints(builder) {
    return {
      fetchCart: builder.query({
        providesTags: ["Cart"],
        query: () => {
          return {
            url: "cart",
            method: "GET",
          };
        },
      }),
      addItemToCart: builder.mutation({
        invalidatesTags: ["Cart"],
        query: (body) => {
          return {
            url: "cart",
            method: "POST",
            body: body,
          };
        },
      }),
      deleteItemFromCart: builder.mutation({
        invalidatesTags: ["Cart"],
        query: (id) => {
          return {
            url: `cart/${id}`,
            method: "DELETE",
          };
        },
      }),
      patchItemCountInCart: builder.mutation({
        invalidatesTags: ["Cart"],
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
