// React Stuff
import { JSX } from "react";

// Material
import { Stack } from "@mui/material";

export const BranchInfo: React.FC = (): JSX.Element => {
  return (
    <Stack
      sx={{
        height: "300px",
        backgroundColor: "white",
        borderLeft: "2px solid rgb(231, 231, 231)",
      }}
    >
      Branch Information
    </Stack>
  );
};
