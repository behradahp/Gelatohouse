// React Stuff
import { JSX } from "react";

// Material
import { AppBar, Button, IconButton, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const Header: React.FC = (): JSX.Element => {
  return (
    <AppBar color='transparent' position='static' elevation={0}>
      <Stack
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
        py={1}
        sx={{
          paddingX: {
            xs: 2,
            md: 10,
          },
        }}
      >
        <Stack
          flexDirection='row'
          gap={1}
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },
          }}
        >
          <IconButton>
            <MenuIcon />
          </IconButton>
          <img
            src='https://order.gelatohouse.ir/2.17.23/img/9dcd0541179a7fde025e88026901a4be.png'
            alt=''
            width={40}
            height={40}
          />
        </Stack>
        <Stack
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          <img
            src='https://order.gelatohouse.ir/2.17.23/img/9dcd0541179a7fde025e88026901a4be.png'
            alt=''
            width={56}
            height={56}
          />
        </Stack>
        <Stack flexDirection='row' gap={5}>
          <Button
            color='secondary'
            sx={{
              fontFamily: "Yekan-Bold",
              fontSize: "16px",
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            سفارش اینترنتی
          </Button>
          <Button
            color='secondary'
            sx={{
              fontFamily: "Yekan-Bold",
              fontSize: "16px",
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            قوانین سایت
          </Button>
          <Button
            variant='contained'
            sx={{
              borderRadius: 5,
              fontFamily: "Yekan-Bold",
              fontSize: "16px",
              paddingX: 3,
              boxShadow: "none",
            }}
          >
            ورود
          </Button>
        </Stack>
      </Stack>
    </AppBar>
  );
};
