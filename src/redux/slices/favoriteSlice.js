import { createSlice } from "@reduxjs/toolkit";

let favsSlice = createSlice({
  name: "favs",
  initialState: { favsList: [], count: 0  },
  reducers: {
    addFavs: function (state, { type, payload }) {
      // state.favsList.push(payload);
        const exists = state.favsList.some((item) => item.id === payload.id);
      if (!exists) {
        state.favsList.push(payload); }
    },
    removeFavs: function (state, { type, payload }) {
      state.favsList = state.favsList.filter((item) => item.id !== payload);
    },
    counter:function(state,{type,payload}){
        state.favsList= state.favsList.length
    }
  },
});

export const { addFavs, removeFavs, counter } = favsSlice.actions;
export default favsSlice.reducer;
