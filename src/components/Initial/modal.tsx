// React Stuff
import { JSX } from "react";
import { NavLink } from "react-router-dom";

// Material
import { Stack, Typography, Button } from "@mui/material";

export const InitialPageModal: React.FC = (): JSX.Element => {
  return (
    <Stack alignItems='center'>
      <Stack
        alignItems='center'
        spacing={2}
        position='absolute'
        zIndex={100}
        top={140}
        py={7}
        sx={{
          width: "970px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: 3,
        }}
      >
        <Typography sx={{ fontSize: 20, color: "black" }}>
          لطفا شعبه مورد نظر خود را انتخاب کنید
        </Typography>

        <Stack flexDirection='row' gap={2}>
          <NavLink to='/order'>
            <Button
              variant='contained'
              sx={{
                width: 465,
                backgroundColor: "white",
                color: "black",
                fontSize: 16,
              }}
            >
              شهرک غرب
            </Button>
          </NavLink>
          <NavLink to='/order'>
            <Button
              variant='contained'
              sx={{
                width: 465,
                backgroundColor: "white",
                color: "black",
                fontSize: 16,
              }}
            >
              ولنجک
            </Button>
          </NavLink>
        </Stack>
      </Stack>
    </Stack>
  );
};
