import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./popularSlice";
import searchReducer from "./searchSlice";
export const store = configureStore({
  reducer: {
    homeVideos: homeReducer,
    searchVideos: searchReducer,
  },
});
