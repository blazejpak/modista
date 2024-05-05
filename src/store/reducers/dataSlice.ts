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
    sendData: (state, action: PayloadAction<Product[]>) => {
      state.data = action.payload;
    },
    getData: (state) => {
      state.data;
    },
  },
});

export const { sendData, getData } = dataSlice.actions;

export default dataSlice.reducer;
