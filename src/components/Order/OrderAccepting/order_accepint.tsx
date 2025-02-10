// React Stuff
import { JSX } from "react";

// Packages
import { Puff } from "react-loader-spinner";

// Material
import { Stack, Typography } from "@mui/material";

export const OrderAccepting: React.FC = (): JSX.Element => {
  return (
    <Stack
      flexDirection='row'
      gap={1}
      justifyContent='center'
      alignItems='center'
      sx={{ backgroundColor: "#484849" }}
      py='3px'
    >
      <Puff
        visible={true}
        height='20'
        width='20'
        color='#4fa94d'
        ariaLabel='puff-loading'
        wrapperStyle={{}}
        wrapperClass=''
      />
      <Typography variant='body1' sx={{ color: "white", fontSize: 14 }}>
        سفارش می‌پذیریم
      </Typography>
    </Stack>
  );
};
