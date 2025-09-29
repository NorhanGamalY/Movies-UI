import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useContext } from "react";
import UserContext from './../../../contexts/UserContextProvider';

export default function MuiRadio() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("Error");
  const { form, setField } = ctx;

  return (
    <FormControl>
      <FormLabel id="gender-group" sx={{ color: "white" }}>
        Gender
      </FormLabel>
      <RadioGroup
        aria-labelledby="gender-group"
        name="gender"
        value={form.gender}
        onChange={(e) => setField("gender", e.target.value)}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
  );
}
