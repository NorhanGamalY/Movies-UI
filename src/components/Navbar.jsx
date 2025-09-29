import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import UserContext from './../contexts/UserContextProvider';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

export default function Navbar() {
   const ctx = useContext(UserContext);
  const isRegistered = ctx?.isRegistered;
  let count= useSelector((state)=>state.favorites.favsList.length)
  return (
    <>
      <Box className="nav">
        <Box className='list'>
            <Link to="/">ALL Movies</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/favorites"> Favorites <span style={{color:"red"}}>{count}</span></Link>
            <Link to="/addpost">Add Post</Link>
            <Link to="/about">About Us</Link>
 {!isRegistered && <Link to="/register">Register</Link>}
        {isRegistered && <Link to="/profile">Profile</Link>}

            
        </Box>
      </Box>
    </>
  )
}
