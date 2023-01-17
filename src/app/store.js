import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../redux/Feature/portfolio/api/apiSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getdefaultMiddlewares) => {
        return getdefaultMiddlewares().concat(apiSlice.middleware);
    },
});
