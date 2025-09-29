import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const res = await axios.get("https://norhangamaly.github.io/movies-api/data.json");
  return res.data.movies;
});

const moviesSlice = createSlice({
  name: "movies",
  initialState: { moviesList: [], status: "idle", error: null },
  reducers: {
    setMovies: function (state, { type, payload }) {
      state.moviesList = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.moviesList = payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error?.message || "Failed to load movies";
      });
  },
});

export const { setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
