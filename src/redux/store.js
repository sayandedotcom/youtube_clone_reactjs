import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./popularSlice";

export const store = configureStore({
  reducer: {
    homeVideos: homeReducer,
  },
});
