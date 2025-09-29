// import React, { Component } from 'react'

// export class Footer extends Component {
//    constructor (props){
//         super(props)
//         this.state={
//         name:"Norhan" ,
//     }
//     }
//   render() {
//     return (
//       <div className='footer'>
//         <h2>Showed By {this.state.name}</h2>
//       </div>
//     )
//   }
// }

  



// export default (Footer)
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: "80%", margin: "50px auto", bgcolor:"#4D4B4B",display: "flex", alignItems: "center",justifyContent: "space-evenly" }} className='footer' value={value} onChange={handleChange}>
      
      <Typography variant='h6'>Showed By NorhaN</Typography>
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
      />
      <Link to="favorites">
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      /></Link>
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
  );
}
