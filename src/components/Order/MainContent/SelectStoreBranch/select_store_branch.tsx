// React Stuff
import { JSX, useState } from "react";

// Material
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

export const SelectStoreBranche: React.FC = (): JSX.Element => {
  const [branch, setBranch] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setBranch(event.target.value as string);
  };

  return (
    <Box sx={{ width: { xs: "40%", md: 170 } }}>
      <FormControl fullWidth size='small'>
        <InputLabel id='demo-simple-select-label'>شعبه</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={branch}
          label='Age'
          onChange={handleChange}
          sx={{
            border: "1px solid #F2F2F4",
            borderRadius: 100,
            backgroundColor: "white",
            fontSize: 16,
            fontFamily: "Yekan-Medium",
          }}
        >
          <MenuItem value={"shahrak"}>شعبه شهرک غرب</MenuItem>
          <MenuItem value={"velenjak"}>شعبه ولنجک</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
