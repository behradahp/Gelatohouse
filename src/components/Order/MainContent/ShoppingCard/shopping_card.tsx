// React Stuff
import { JSX } from "react";

// Material
import { Stack, Typography } from "@mui/material";

// Images
import emptyShoppingCardImage from "../../../../assets/images/empty_shoping_card.png";

export const ShoppingCard: React.FC = (): JSX.Element => {
  return (
    <Stack
      py={2}
      position={"sticky"}
      top={20}
      sx={{
        width: 400,
        backgroundColor: "white",
        borderRadius: 2,
        border: "1px solid #F0E0E4",
      }}
    >
      <Stack px={2} pb={2} sx={{ borderBottom: "1px solid #F0E0E4" }}>
        <Typography variant='h6' color='secondary'>
          سبد خرید
        </Typography>
      </Stack>

      <Stack justifyContent='center' alignItems='center' sx={{ height: 215 }}>
        <img src={emptyShoppingCardImage} alt='' />
        <Typography variant='h6' sx={{ color: "#D5D5D5" }}>
          سبد خرید خالی است
        </Typography>
      </Stack>
    </Stack>
  );
};
