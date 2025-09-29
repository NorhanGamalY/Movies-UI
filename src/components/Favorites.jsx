import React from 'react'
import{ useDispatch}  from 'react-redux';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Movie from './Movie';


export default function Favorites() {
let myFavorites= useSelector((state)=>state.favorites.favsList);
  const dispatch = useDispatch();

  return (
   <Box sx={{ width: "900px", margin: "auto", padding: "20px" }}>
      {myFavorites.length === 0 ? (
        <Typography variant='h4'>No favorites added yet!</Typography>
      ) : (
        <div className="container">
          {myFavorites.map((fav) => (
            <Movie key={fav.id} {...fav} />
          ))}
        </div>
      )}
    </Box>
  )
}
