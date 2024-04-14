import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../utils/types";

interface Data {
  data: Product[];
  cart: Product[];
}

const initialState: Data = {
  data: [],
  cart: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getData: (state, action: PayloadAction<Product[]>) => {
      state.data = action.payload;
    },
    cartData: (state, action: PayloadAction<Product[]>) => {
      state.cart = action.payload;
    },
  },
});

export const { getData, cartData } = dataSlice.actions;

export default dataSlice.reducer;
