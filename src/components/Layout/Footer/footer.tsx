// React Stuff
import { JSX } from "react";

// Material
import { Stack, Typography } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer: React.FC = (): JSX.Element => {
  return (
    <Stack>
      <Stack
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
        py={2}
        px={15}
        sx={{
          borderBottom: "1px solid #EEEEEE",
          borderTop: "1px solid #EEEEEE",
        }}
      >
        <Stack flexDirection='row' gap='4px'>
          <Typography variant='body1' color='secondary'>
            © حقوق مادی و معنوی متعلق به
          </Typography>
          <Typography variant='body1' color='primary' display={"inline"}>
            جلاتو هاوس
          </Typography>
          <Typography variant='body1' color='secondary'>
            است
          </Typography>
        </Stack>

        <Stack flexDirection='row' gap={1}>
          <TelegramIcon color='primary' fontSize='large' />
          <InstagramIcon color='primary' fontSize='large' />
        </Stack>
      </Stack>
      <Stack alignItems='center' mt={2} spacing={3}>
        <Stack flexDirection='row' gap={1}>
          <Typography sx={{ color: "#8E8E8E" }}>
            طراحی و پیاده‌سازی توسط
          </Typography>
          <Typography
            display={"inline"}
            sx={{
              backgroundImage: `linear-gradient( to right, #5224D8, #E66DF8, #432BFE,rgb(67, 162, 168))`,
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            behradahp
          </Typography>
          <Typography sx={{ color: "#8E8E8E" }}></Typography>
        </Stack>

        <Typography
          variant='body1'
          sx={{ color: "#8E8E8E", fontFamily: "Yekan-Regular", fontSize: 14 }}
        >
          V 1. 0. 0
        </Typography>

        <img
          src='https://img9.irna.ir/d/r2/2021/12/12/4/169271307.jpg?ts=1639298762393'
          alt='trust'
          width={250}
        />
      </Stack>
    </Stack>
  );
};
