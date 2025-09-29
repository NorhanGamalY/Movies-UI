import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFavs, removeFavs  } from '../redux/slices/favoriteSlice';

export default function Movie({id, name, banner, category}) {

const dispatch =useDispatch();
  return (
    <Card sx={{ maxWidth: 345, bgcolor:"#4D4B4B", color:"white" }}
    className='mov'>
  <Box sx={{ display: "flex", alignItems: "center",justifyContent: "space-evenly", margin: "20px" }}>
  <Avatar sx={{ bgcolor: red[500] }}>
    <img src="action.png" alt="action" />
  </Avatar>
  <Typography variant="h4">{name?.split(":")[0]}</Typography>
</Box>

      <CardMedia
        component="img"
        height="500"
src={banner}
        alt="Movie"
      />
      <CardContent>
        <Typography variant="h5" sx={{ color: '#FFFAF0' }}>
          
           <IconButton aria-label="add to favorites" sx={{ color: '#FAEBD7' }}   
           onClick={() => dispatch(addFavs({ id, name, banner, category }))}>
            
          <FavoriteIcon />
        </IconButton>
      {category}
        </Typography>
      </CardContent>
     <Box sx={{ display: "flex", alignItems: "center",justifyContent: "space-evenly", margin: "20px" }}>
<Button variant="outlined"
          onClick={() => dispatch(removeFavs(id))}>
Delete</Button>
        <Link to={`/movies/${id}`}>
<Button variant="outlined">Know More</Button>
    </Link>
     </Box>
    </Card>
  );
}

