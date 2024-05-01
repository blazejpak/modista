import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "../../utils/types";

interface Data {
  cart: Cart[];
}

const initialState: Data = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartData: (state, action: PayloadAction<Cart[]>) => {
      state.cart = action.payload;
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { cartData, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
