import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

interface Data {
  data: any[];
}

const initialState: Data = {
  data: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const { getData } = dataSlice.actions;

export default dataSlice.reducer;
