const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  progress: 0,
};

export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    initialProgress: (state) => {
      state.progress = 0;
    },
    pendingProgress: (state) => {
      state.progress = 30;
    },
    fullProgress: (state) => {
      state.progress = 100;
    },
  },
});

export const { initialProgress, pendingProgress, fullProgress } =
  loaderSlice.actions;
export default loaderSlice.reducer;
