import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  values: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.values = [
        ...state.values,
        { ...action.payload, key: state.values.length + 1 },
      ];
    },
  },
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
