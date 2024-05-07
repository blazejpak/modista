import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
<<<<<<< HEAD
import { Cart } from "../../utils/types";

interface Data {
  cart: Cart[];
}

const initialState: Data = {
  cart: [],
=======
import { Product } from "../../utils/types";
import { groupProductInCartByAmount } from "../../utils/helpers";

interface Data {
  cartData: Product[];
  isOpenCart: boolean;
}

const initialState: Data = {
  cartData: [],
  isOpenCart: false,
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
<<<<<<< HEAD
    cartData: (state, action: PayloadAction<Cart[]>) => {
      state.cart = action.payload;
    },
    clearCart: (state) => {
      state.cart = [];
=======
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
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb
    },
  },
});

<<<<<<< HEAD
export const { cartData, clearCart } = cartSlice.actions;
=======
export const { sendCartData, getCartData, clearCart, openCart } =
  cartSlice.actions;
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb

export default cartSlice.reducer;
