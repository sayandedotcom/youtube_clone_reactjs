import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "../api";
const initialState = {
  videos: [],
  isLoading: false,
  keyword: null,
};

export const getSearchedVideos = createAsyncThunk(
  "searchVideos/fetchVideo",
  async (search) => {
    try {
      const { data } = await request("/search", {
        params: {
          part: "snippet",
          maxResults: 20,
          q: search,
          type: "video",
        },
      });
      return { videos: data.items, keyword: search };
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
        state.videos =
          state.keyword === action.payload.keyword
            ? [...state.videos, ...action.payload.videos]
            : action.payload.videos;
        state.keyword = action.payload.keyword;
      })
      .addCase(getSearchedVideos.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default searchSlice.reducer;
