// React Stuff
import { JSX, useState } from "react";

// Material
import { Box, FormControl, MenuItem, Select } from "@mui/material";

export const SelectServiceRange: React.FC = (): JSX.Element => {
  const [serviceRange, setServiceRange] = useState<string>("");
  return (
    <Box sx={{ width: 220 }}>
      <FormControl fullWidth size='small'>
        <Select
          value={serviceRange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          onChange={() => {
            setServiceRange("محدوده سرویس‌دهی پیک");
          }}
          sx={{
            border: "1px solid #F2F2F4",
            borderRadius: 100,
            backgroundColor: "white",
            fontSize: 16,
            fontFamily: "Yekan-Medium",
          }}
          disabled
        >
          <MenuItem value=''>
            <em>محدوده سرویس‌دهی پیک</em>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
