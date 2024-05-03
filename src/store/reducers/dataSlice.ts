import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../utils/types";

interface Data {
  data: Product[];
}

const initialState: Data = {
  data: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getData: (state, action: PayloadAction<Product[]>) => {
      state.data = action.payload;
    },
  },
});

export const { getData } = dataSlice.actions;

export default dataSlice.reducer;
