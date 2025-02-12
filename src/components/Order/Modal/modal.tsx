// React Stuff
import { JSX } from "react";

// Material
import { Button, Stack, Typography } from "@mui/material";

// Image
import warningImage from "../../../assets/images/warning.png";

export const OrderPageWelcomeModal: React.FC<{
  isOpen: boolean;
  closeFunction: () => void;
}> = ({ isOpen, closeFunction }): JSX.Element => {
  return (
    <Stack
      display={isOpen ? "" : "none"}
      justifyContent='center'
      alignItems='center'
      position='fixed'
      zIndex={1000}
      sx={{
        inset: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Stack
        sx={{
          width: { xs: "90%", md: 540 },
          borderRadius: 3,
          backgroundColor: "white",
        }}
        alignItems='center'
        gap={3}
        py={5}
      >
        <img src={warningImage} alt='warning' width={200} />

        <Typography variant='h5' sx={{ color: "black" }}>
          شعبه شهرک غرب
        </Typography>

        <Typography
          variant='body1'
          sx={{ color: "black", fontFamily: "Yekan-Regular" }}
          textAlign='center'
        >
          به شعبهٔ شهرک غرب خوش اومدی💜 اینجا 2 روش فروش داریم: بصورت آنلاین (از
          طریق وبسایت با پرداخت آنلاین؛ تا پایان شب) و یا از طریق صندوق (با کارت
          بانکی؛ تا ساعت ۶ عصر).
        </Typography>

        <Button
          variant='contained'
          sx={{ padding: "10px 50px", fontSize: 18 }}
          onClick={() => closeFunction()}
        >
          متوجه شدم!
        </Button>
      </Stack>
    </Stack>
  );
};
