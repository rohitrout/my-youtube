import { configureStore } from "@reduxjs/toolkit";
import sideSlice from "./sideSlice";

const store = configureStore({
  reducer: {
    side: sideSlice,
  },
});

export default store;
