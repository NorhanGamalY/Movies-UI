import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Box, Paper, Stack, Typography, Chip } from "@mui/material";
import UserContext from './../contexts/UserContextProvider';

export default function Profile() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("Error");
  const { user, isRegistered } = ctx;

  if (!isRegistered) return <Navigate to="/register" replace />;

  return (
    <>
            <Typography variant="h5" sx={{ mb: 2 }}>Your Profile</Typography>

    <Box sx={{ p: 3, display: "flex", justifyContent: "center" }}>
      <Paper sx={{ p: 3, width: "100%", maxWidth: 640 ,color: 'white'      ,bgcolor: "transparent",
}} elevation={3}>
        <Stack spacing={1}>
          <Typography><b>Hello:</b> {user.name}</Typography>
          <Typography><b>You are:</b> {user.gender || "—"}</Typography>
          <Typography><b>Your preferred Categories are:</b> {user.categories?.length ? user.categories.join(", ") : "—"}</Typography>
          <Typography><b>Your favorite Languages are:</b></Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" >
            {(user.languages || []).map((l) => <Chip key={l} label={l} />)}
          </Stack>
        </Stack>
      </Paper>
    </Box></>
  );
}
