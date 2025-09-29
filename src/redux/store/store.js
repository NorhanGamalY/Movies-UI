import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../slices/favoriteSlice"
import moviesReducer from "../slices/moviesSlice";

const store=   configureStore({
    reducer:{
        favorites:favoriteReducer,
         movies: moviesReducer,


    }
})

export default store;