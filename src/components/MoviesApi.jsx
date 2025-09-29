 import React, { useContext, useEffect } from "react";
import "../index.css";
import Movie from "./Movie";
// import MoviesDataContext from "../contexts/MoviesContextProvider"; 
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/slices/moviesSlice";

export default function MoviesApi() {
    const dispatch = useDispatch();
  const { moviesList = [], status, error } = useSelector((state) => state.movies); 

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMovies());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <img className="load" src="loading.png" alt="loading" />;
  }

  if (status === "failed") {
    return <p style={{ color: "red" }}>Failed to load movies.</p>;
  }
  // const ctx = useContext(MoviesDataContext);
  // if (!ctx) {
  //   throw new Error("Failed to load Movies!");
  // }
  // const { moviesList } = ctx;

  // if (!moviesList || moviesList.length === 0) {
  //   return <img className="load" src="loading.png" alt="loading" />;
  // }

  return (
    <div className="container">
      {moviesList?.map((m) => (
        <Movie key={m.id} {...m} />
      ))}
    </div>
  );
}
