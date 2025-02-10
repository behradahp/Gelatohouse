// React Stuff
import { JSX } from "react";

// Material
import { Stack } from "@mui/material";
import HideImageIcon from "@mui/icons-material/HideImage";

// Interface
interface SliderErrorProps {
  width?: string;
  height?: string;
}

export const SliderError: React.FC<SliderErrorProps> = ({
  width,
  height,
}): JSX.Element => {
  return (
    <Stack
      justifyContent='center'
      alignItems='center'
      sx={{ height: height || "400px" }}
    >
      <Stack
        justifyContent='center'
        alignItems='center'
        sx={{
          width: width || "100%",
          height: "100%",
          backgroundColor: "#D9D9D9",
        }}
      >
        <HideImageIcon sx={{ fontSize: 100 }} />
      </Stack>
    </Stack>
  );
};
