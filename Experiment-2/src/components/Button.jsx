import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import Slider from "@mui/material/Slider";
import ToggleButton from "@mui/material/ToggleButton";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

export default function ButtonBasic() {
  const [degree, setDegree] = React.useState("");
  const [above18, setAbove18] = React.useState(false);

  const handleDegreeChange = (event) => {
    setDegree(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setAbove18(event.target.checked);
  };

  return (
    <>
      <Button size="small" variant="outlined">Small</Button>
      <br />

      <TextField label="Small" size="small" variant="outlined" />
      <br />

      <Rating name="size-medium" defaultValue={2} size="medium" />
      <br />

      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
      <br />

      <ToggleButton value="toggle">Toggle</ToggleButton>
      <br />

      <FormControl fullWidth>
        <InputLabel id="degree-select-label">Gender</InputLabel>
        <Select
          labelId="degree-select-label"
          id="degree-select"
          value={degree}
          label="Degree"
          onChange={handleDegreeChange}
        >
          <MenuItem value="CSE">Male</MenuItem>
          <MenuItem value="Mechanical">Female</MenuItem>
          <MenuItem value="Civil">Other</MenuItem>
          <MenuItem value="Electrical">Prefer not to say</MenuItem>
        </Select>
      </FormControl>

      <br />

      <FormControlLabel
        control={
          <Checkbox
            checked={above18}
            onChange={handleCheckboxChange}
          />
        }
        label="Agree to terms and conditions"
      />
    </>
  );
}
