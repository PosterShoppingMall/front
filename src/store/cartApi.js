import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http" }),
});
