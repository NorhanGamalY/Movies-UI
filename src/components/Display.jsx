import { Box, Typography } from "@mui/material";
import React from "react";

export default function Display({ id, title, count, description }) {
  return (
    <Box className="card">
      <Typography variant="h3">Title : {title}</Typography>
      <Typography variant="h5">Description : {description}</Typography>
      <Typography variant="div">Count : {count !== "" ? count : 0}</Typography>
    </Box>
  );
}
