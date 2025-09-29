import { useState, useContext } from "react";
import MoviesDataContext from "../contexts/MoviesContextProvider";
import { Box, Button } from "@mui/material";
import { useSelector } from "react-redux";

export default function Bonus() {
  // const ctx = useContext(MoviesDataContext);
  // if (!ctx) throw new Error("Error");
  // const { moviesList } = ctx;

  // const [i, setI] = useState(0);
  // if (!moviesList || moviesList.length === 0) {
  //   return <img className="load" src="loading.png" alt="loading" />;
  // }
    const { moviesList = [], status } = useSelector((state) => state.movies);

  const [i, setI] = useState(0);

  if (status === "loading" || moviesList.length === 0) {
    return <img className="load" src="loading.png" alt="loading" />;
  }

  const len = moviesList.length;
  const pre = () => setI(p => (p - 1 + len) % len);
  const nex = () => setI(p => (p + 1) % len);

  return (
    
    <>
    <Box className="card">
      <Button variant="outlined" onClick={pre}>PREVIOUS</Button>
      <img src={moviesList[i]?.banner} alt={`pic${moviesList[i]?.id}`} />
         <Button variant="outlined"  onClick={nex}>NEXT</Button>
    </Box>
    
    </>
  );
}






