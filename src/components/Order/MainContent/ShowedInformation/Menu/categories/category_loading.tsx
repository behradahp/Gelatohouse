// React Stuff
import { JSX } from "react";

// Material
import { Button, Skeleton, Stack } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export const CategoryLoading: React.FC = (): JSX.Element => {
  return (
    <Stack
      flexDirection='row'
      alignItems='center'
      justifyContent='space-between'
      px={2}
    >
      <Button
        sx={{
          minWidth: "min-content",
          color: "#CACACA",
        }}
      >
        <ArrowForwardIosIcon />
      </Button>

      <Stack
        flexDirection='row'
        justifyContent='space-between'
        sx={{ width: "800px" }}
      >
        {Array(8)
          .fill(0)
          .map((index, item) => {
            return (
              <Stack key={item + index} spacing={1}>
                <Skeleton variant='rectangular' width={80} height={80} />
                <Skeleton variant='rounded' width={80} height={20} />
              </Stack>
            );
          })}
      </Stack>

      <Button
        sx={{
          minWidth: "min-content",
          color: "#CACACA",
        }}
      >
        <ArrowBackIosNewIcon />
      </Button>
    </Stack>
  );
};
