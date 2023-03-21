import { createSlice } from "@reduxjs/toolkit";

const sideSlice = createSlice({
  name: "side",
  initialState: {
    slideView: true,
    items: [],
  },
  reducers: {
    toggle: (state) => {
      state.slideView = !state.slideView;
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { toggle, addItem } = sideSlice.actions;

export default sideSlice.reducer;
