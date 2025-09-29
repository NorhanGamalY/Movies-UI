import axios from "axios";
import { createContext, useEffect, useState } from "react";

const MoviesDataContext = createContext(undefined);
export default MoviesDataContext;           

export function MoviesContextProvider({ children }) {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(()=>{
    axios.get('https://norhangamaly.github.io/movies-api/data.json')
    .then((res)=>{setMoviesList(res.data.movies)}) 
    .catch((err) => console.error(err));

  }, []);

  return (
    <MoviesDataContext.Provider value={{ moviesList, setMoviesList }}>
      {children}
    </MoviesDataContext.Provider>
  );
}
