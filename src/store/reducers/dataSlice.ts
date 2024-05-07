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
<<<<<<< HEAD
    getData: (state, action: PayloadAction<Product[]>) => {
=======
    sendData: (state, action: PayloadAction<Product[]>) => {
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb
      state.data = action.payload;
    },
    getData: (state) => {
      state.data;
    },
  },
});

export const { sendData, getData } = dataSlice.actions;

export default dataSlice.reducer;
