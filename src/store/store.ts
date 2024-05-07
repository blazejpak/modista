import { dataSlice } from "./reducers/dataSlice";
import { cartSlice } from "./reducers/cartSlice";
<<<<<<< HEAD
import { combineReducers, configureStore } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  dataSlice: dataSlice.reducer,
  cartSlice: cartSlice.reducer,
=======
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    cart: cartSlice.reducer,
  },
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
