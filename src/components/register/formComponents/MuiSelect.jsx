import React, { useContext } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import UserContext from './../../../contexts/UserContextProvider';

export default function MuiSelect() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("Error");
  const { form, setField } = ctx;

  return (
    <>
      <FormControl
        fullWidth
        sx={{
          input: { color: "white" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "white" },
            "&:hover fieldset": { borderColor: "lightblue" },
            "&.Mui-focused fieldset": { borderColor: "cyan" },
          },
          "& .MuiInputLabel-root": { color: "white" },
          "& .MuiInputLabel-root.Mui-focused": { color: "cyan" },
          mb: 2,
        }}
      >
        <InputLabel id="categories-label">Categories</InputLabel>
        <Select
          labelId="categories-label"
          id="categories"
          value={form.categories}
          label="Categories"
          multiple
          onChange={(e) => setField("categories", e.target.value)}
        >
          <MenuItem value={"Drama"}>Drama</MenuItem>
          <MenuItem value={"Adventure"}>Adventure</MenuItem>
          <MenuItem value={"Sci-Fi"}>Sci-Fi</MenuItem>
          <MenuItem value={"Comedy"}>Comedy</MenuItem>
          <MenuItem value={"Romantic"}>Romantic</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
