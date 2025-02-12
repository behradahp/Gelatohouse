// React Stuff
import { JSX } from "react";
import { NavLink } from "react-router-dom";

// Material
import { Stack, Typography, Button, Link } from "@mui/material";

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
          width: {
            xl: "980px",
            xs: "70%",
          },
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: 3,
        }}
      >
        <Typography sx={{ fontSize: 20, color: "black" }}>
          لطفا شعبه مورد نظر خود را انتخاب کنید
        </Typography>

        <Stack flexDirection='row' gap={2} sx={{ width: "90%" }}>
          <Link
            component={NavLink}
            to='/order'
            sx={{
              width: {
                xl: 465,
                xs: "50%",
              },
            }}
          >
            <Button
              variant='contained'
              sx={{
                width: "100%",
                backgroundColor: "white",
                color: "black",
                fontSize: 16,
              }}
            >
              شهرک غرب
            </Button>
          </Link>
          <Link
            component={NavLink}
            to='/order'
            sx={{
              width: {
                xl: 465,
                xs: "50%",
              },
            }}
          >
            <Button
              variant='contained'
              sx={{
                width: "100%",
                backgroundColor: "white",
                color: "black",
                fontSize: 16,
              }}
            >
              ولنجک
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};
