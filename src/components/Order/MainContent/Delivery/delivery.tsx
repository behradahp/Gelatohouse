// React Stuff
import { JSX } from "react";

// Material
import { Stack, Typography } from "@mui/material";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";

export const DeliveryInfo: React.FC = (): JSX.Element => {
  return (
    <Stack
      flexDirection='row'
      justifyContent='center'
      py={2}
      sx={{
        width: 400,
        backgroundColor: "white",
        borderRadius: 5,
        border: "1px solid #F0E0E4",
      }}
    >
      <Stack flexDirection='row' alignItems='center' gap={3} px={2}>
        <Inventory2OutlinedIcon fontSize='large' />

        <Stack alignItems='center'>
          <Typography
            variant='body1'
            sx={{ color: "black", fontFamily: "Yekan-Regular" }}
          >
            تا 20 دقیقه
          </Typography>
          <Typography
            variant='body2'
            sx={{ color: "#9A9A9F", fontFamily: "Yekan-Regular" }}
          >
            تحویل حضوری
          </Typography>
        </Stack>
      </Stack>

      <Stack
        flexDirection='row'
        alignItems='center'
        gap={3}
        px={2}
        sx={{ borderLeft: "1px solid #E0E0E0" }}
      >
        <DeliveryDiningOutlinedIcon fontSize='large' />

        <Stack alignItems='center'>
          <Stack flexDirection='row' alignItems='center' gap={1}>
            <Typography
              variant='body1'
              sx={{ color: "black", fontFamily: "Yekan-Regular" }}
            >
              غیرفعال
            </Typography>
            <WarningAmberOutlinedIcon fontSize='small' />
          </Stack>

          <Typography
            variant='body2'
            sx={{ color: "#9A9A9F", fontFamily: "Yekan-Regular" }}
          >
            ارسال با پیک
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
