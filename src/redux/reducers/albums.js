import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  albums: [],
  status: "loading",
  error: null,
};

const fetchAlbums = createAsyncThunk(
  "albums/fetchAlbums",
  async (userId) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
    return response.data;
  }
);

const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: {
    [fetchAlbums.pending]: (state) => {
      state.status = "loading";
    },
    [fetchAlbums.fulfilled]: (state, action) => {
      state.status = "success";
      state.albums = action.payload;
      state.error = null;
    },
    [fetchAlbums.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { reset } = albumsSlice.actions
export default albumsSlice.reducer;
export { fetchAlbums };
