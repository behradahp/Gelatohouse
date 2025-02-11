// React Stuff
import { JSX } from "react";

//Material
import { Stack, Typography } from "@mui/material";

export const ProductIngradient: React.FC<{ text: string }> = ({
  text,
}): JSX.Element => {
  return (
    <Stack
      position='absolute'
      top={0}
      right={0}
      zIndex={5}
      sx={{
        width: "100%",
        height: "80%",
        opacity: 0.01,
        "&:hover": {
          opacity: 1,
        },
      }}
    >
      <Stack
        justifyContent='center'
        sx={{
          width: "100%",
          height: 180,
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        }}
      >
        <Typography color='secondary'>{text}</Typography>
      </Stack>
    </Stack>
  );
};
