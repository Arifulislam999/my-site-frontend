import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000",
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
