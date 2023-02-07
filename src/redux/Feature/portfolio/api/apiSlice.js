import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:4000",
    baseUrl: "https://my-site-backend-server-dfwv.onrender.com",
  }),
  endpoints: (builder) => ({
    getPortfolios: builder.query({
      query: () => "/feature-portfolio",
    }),
    postUser: builder.mutation({
      query: (data) => ({
        url: "/users",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const { useGetPortfoliosQuery, usePostUserMutation } = apiSlice;
