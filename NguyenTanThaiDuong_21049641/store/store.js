import { configureStore } from "@reduxjs/toolkit";
import bikesReducer from "./productsSlice";

const store = configureStore({
    reducer: {
        bikes: bikesReducer,
    },
});

export default store;
