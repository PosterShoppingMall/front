import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const orderHistoryApi = createApi({
  reducerPath: "orderHistory",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints(builder) {
    return {
      fetchOrderHistory: builder.query({
        providesTags: ["OrderHistory"],
        query: () => {
          return {
            url: "orders",
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchOrderHistoryQuery } = orderHistoryApi;
export { orderHistoryApi };
