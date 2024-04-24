import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "../../utils/types";

interface Data {
  cart: Cart[];
  isOpenCart: boolean;
}

const initialState: Data = {
  cart: [],
  isOpenCart: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartData: (state, action: PayloadAction<Cart[]>) => {
      state.cart = action.payload;
    },
    openCart: (state, action: PayloadAction<boolean>) => {
      state.isOpenCart = action.payload;
    },
  },
});

export const { cartData } = cartSlice.actions;

export default cartSlice.reducer;
