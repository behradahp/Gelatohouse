// React Stuff
import { JSX } from "react";

//Material
import { Stack, Typography } from "@mui/material";

//API

export const ProductDiscountBadge: React.FC<{ discount: number }> = ({
  discount,
}): JSX.Element => {
  return (
    <Stack
      justifyContent='center'
      alignItems='center'
      sx={{
        width: 35,
        height: 30,
        position: "absolute",
        right: 10,
        top: 10,
        backgroundColor: "#00B3C4",
        color: "white",
        borderRadius: 2,
      }}
    >
      <Typography sx={{ fontSize: 14 }}>
        ٪{discount.toLocaleString("fa")}
      </Typography>
    </Stack>
  );
};
