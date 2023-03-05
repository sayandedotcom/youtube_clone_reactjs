import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./popularSlice";
import searchReducer from "./searchSlice";
import loaderReducer from "./loaderSlice";
export const store = configureStore({
  reducer: {
    homeVideos: homeReducer,
    searchVideos: searchReducer,
    loader: loaderReducer,
  },
});
