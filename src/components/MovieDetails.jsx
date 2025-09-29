import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box } from '@mui/material';
import { Typography } from '@mui/material';

const MovieDetails = () => {
  const [thisMovie, setThisMovie] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    // axios
    //   .get(`http://localhost:5000/movies/${id}`)
    //   .then((res) => setThisMovie(res.data))
        axios
      .get("https://norhangamaly.github.io/movies-api/data.json")
      .then((res) => {
        const movie = res.data.movies.find((m) => m.id === Number(id));
        setThisMovie(movie);
      })
      .catch((err) => console.error(err));
    
  }, [id]);

  if (!thisMovie) {
    return <img className="load" src="loading.png" alt="loading" />;
  }

  return (
    <Box  className="movD">
      <Box className="banner">      <img src={thisMovie.banner} alt="movie" />
</Box>
<Box className="details">
      <Typography variant="h3" sx={{marginBottom:"40px"}}>{thisMovie.name?.split(":")[0]}</Typography>
      <Typography variant="h5" sx={{marginBottom:"15px"}}>Category: {thisMovie.category}</Typography>
      <Typography variant="h5" sx={{marginBottom:"15px"}}>Director of The movie: {thisMovie.director}</Typography>
      <Typography variant="h5" sx={{marginBottom:"15px"}}>Hero of The movie: {thisMovie.hero}</Typography>
      <Typography variant="h5" sx={{marginBottom:"15px"}}>Year of Production: {thisMovie.year}</Typography>
      <Typography variant="h5" sx={{marginBottom:"15px"}}>rating of The movie: {thisMovie.rating}</Typography>

</Box>

    </Box>
  );
};

export default MovieDetails;
