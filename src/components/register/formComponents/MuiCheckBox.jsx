import React, { useContext } from "react";
import { Checkbox, FormControlLabel, FormControl, FormLabel } from "@mui/material";
import UserContext from './../../../contexts/UserContextProvider';

export default function MuiCheckBox() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("Error");
  const { form, setField } = ctx;
  const { languages } = form;

  const handleCheckbox = (event) => {
    const value = event.target.value;
    const idx = languages.indexOf(value);
    if (idx === -1) setField("languages", [...languages, value]);
    else setField("languages", languages.filter((v) => v !== value));
  };

  return (
    <>
      <FormControl
        sx={{
          input: { color: "white" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "white" },
            "&:hover fieldset": { borderColor: "lightblue" },
            "&.Mui-focused fieldset": { borderColor: "cyan" },
          },
          "& .MuiInputLabel-root": { color: "white" },
          "& .MuiInputLabel-root.Mui-focused": { color: "cyan" },
          border: "2px solid white",
          p: 3,
          m: 2,
        }}
      >
        <FormLabel sx={{ color: "white" }}>Preferred languages</FormLabel>
        <FormControlLabel
          label="English"
          value="English"
          onChange={handleCheckbox}
          control={<Checkbox color="primary" size="small" checked={languages.includes("English")} />}
        />
        <FormControlLabel
          label="Arabic"
          value="Arabic"
          onChange={handleCheckbox}
          control={<Checkbox color="primary" size="small" checked={languages.includes("Arabic")} />}
        />
        <FormControlLabel
          label="Indian"
          value="Indian"
          onChange={handleCheckbox}
          control={<Checkbox color="primary" size="small" checked={languages.includes("Indian")} />}
        />
        <FormControlLabel
          label="French"
          value="French"
          onChange={handleCheckbox}
          control={<Checkbox color="primary" size="small" checked={languages.includes("French")} />}
        />
        <FormControlLabel
          label="Spanish"
          value="Spanish"
          onChange={handleCheckbox}
          control={<Checkbox color="primary" size="small" checked={languages.includes("Spanish")} />}
        />
      </FormControl>
    </>
  );
}
