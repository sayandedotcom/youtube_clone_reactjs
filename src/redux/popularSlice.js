import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "../api";
const initialState = {
  videos: [],
  isLoading: false,
  nextPageToken: null,
  activeCategory: "All",
};
export const getPopularVideos = createAsyncThunk(
  "homeVideos/fetchVideo",
  async (_, { getState }) => {
    try {
      const { data } = await request("/videos", {
        params: {
          part: "snippet,contentDetails,statistics",
          chart: "mostPopular",
          regionCode: "IN",
          maxResults: 20,
          pageToken: getState().homeVideos.nextPageToken,
        },
      });
      return {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: "All",
      };
    } catch (error) {
      console.log("getPopularVideos", error.message);
    }
  }
);

export const getCategoryVideos = createAsyncThunk(
  "homeVideos/fetchVideo",
  async (keyword, { getState }) => {
    try {
      const { data } = await request("/search", {
        params: {
          part: "snippet",
          maxResults: 20,
          pageToken: getState().homeVideos.nextPageToken,
          q: keyword,
          type: "video",
        },
      });
      return {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: keyword,
      };
    } catch (error) {
      console.log("getCategoryVideos", error.message);
    }
  }
);

const homeVideoSlice = createSlice({
  name: "homeVideos",
  initialState,
  reducer: {},
  extraReducers(builder) {
    builder
      .addCase(getPopularVideos.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getPopularVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos =
          state.activeCategory === action.payload.category
            ? [...state.videos, ...action.payload.videos]
            : action.payload.videos;
        state.nextPageToken = action.payload.nextPageToken;
        state.activeCategory = action.payload.category;
      })
      .addCase(getPopularVideos.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default homeVideoSlice.reducer;
