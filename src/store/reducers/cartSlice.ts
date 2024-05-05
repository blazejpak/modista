import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../utils/types";
import { groupProductInCartByAmount } from "../../utils/helpers";

interface Data {
  cartData: Product[];
  isOpenCart: boolean;
}

const initialState: Data = {
  cartData: [],
  isOpenCart: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    sendCartData: (state, action: PayloadAction<Product[]>) => {
      const groupedData = groupProductInCartByAmount(action.payload);
      state.cartData = groupedData;
    },
    getCartData: (state) => {
      state.cartData;
    },
    openCart: (state, action: PayloadAction<boolean>) => {
      state.isOpenCart = action.payload;
    },
    clearCart: (state) => {
      state.cartData = [];
    },
  },
});

export const { sendCartData, getCartData, clearCart, openCart } =
  cartSlice.actions;

export default cartSlice.reducer;
