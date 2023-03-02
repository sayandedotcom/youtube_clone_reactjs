import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "../api";
const initialState = {
  videos: [],
  isLoading: false,
  nextPageToken: null,
  activeCategory: "All",
};

export const getSearchedVideos = createAsyncThunk(
  "searchVideos/fetchVideo",
  async (keyword) => {
    try {
      const { data } = await request("/search", {
        params: {
          part: "snippet",
          maxResults: 20,
          q: keyword,
          type: "video",
        },
      });
      return data.items;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const searchSlice = createSlice({
  name: "searchVideos",
  initialState,
  reducer: {},
  extraReducers(builder) {
    builder
      .addCase(getSearchedVideos.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getSearchedVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(getSearchedVideos.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default searchSlice.reducer;
