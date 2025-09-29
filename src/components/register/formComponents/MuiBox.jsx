
import React, { useContext } from "react";
import { Box, Button, TextField } from "@mui/material";
import MuiCheckBox from "./MuiCheckBox";
import MuiSelect from "./MuiSelect";
import MuiRadio from "./MuiRadio";
import { useNavigate } from "react-router-dom";
import UserContext from './../../../contexts/UserContextProvider';

export default function MuiBox() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("MuiBox must be used within UserProvider");
  const { form, setField, register } = ctx;
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    register();        
    navigate("/profile");
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={onSubmit}
        sx={{ "& .MuiTextField-root": { m: 1, width: "40ch" }, display: "flex", flexDirection: "column" ,          border: `1px solid red`,
}}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            sx={{
              
              input: { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "white" },
                "&:hover fieldset": { borderColor: "lightblue" },
                "&.Mui-focused fieldset": { borderColor: "cyan" },
              },
              "& .MuiInputLabel-root": { color: "white" },
              "& .MuiInputLabel-root.Mui-focused": { color: "cyan" },
            }}
            required
            id="outlined-required"
            label="Name"
            value={form.name}
            onChange={(e) => setField("name", e.target.value)}
          />
        </div>

        <MuiRadio />
        <MuiCheckBox />
        <MuiSelect />

        <Button type="submit" variant="contained">Register</Button>
      </Box>
    </>
  );
}
