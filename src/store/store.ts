import { dataSlice } from "./reducers/dataSlice";
import { cartSlice } from "./reducers/cartSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    dataSlice: dataSlice.reducer,
    cartSlice: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
