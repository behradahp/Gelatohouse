// React Stuff
import { JSX } from "react";

// Material
import { Stack, Typography } from "@mui/material";

// Image
import mapImage from "../../../../assets/images/map.png";

export const BranchInfo: React.FC = (): JSX.Element => {
  const toPersian = (string: string) => {
    const en = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const fa = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

    let output = "";

    for (let x of string) {
      const index = en.indexOf(x);

      if (index === -1) output += x;
      else output += fa[index];
    }

    return output;
  };

  return (
    <Stack
      p={3}
      alignItems={"center"}
      sx={{
        width: "100%",
        backgroundColor: "white",
        border: "2px solid rgb(231, 231, 231)",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignItems: {
          xs: "center",
          md: "start",
        },
      }}
    >
      <Stack alignItems='center' sx={{ width: { xs: "100%", md: "50%" } }}>
        <Typography color='primary' sx={{ fontSize: 20 }}>
          سرویس دهی آنلاین
        </Typography>

        <Stack
          flexDirection='row'
          justifyContent='space-between'
          mt={3}
          py={1}
          sx={{ width: "100%", borderBottom: "1px dashed rgb(231, 231, 231)" }}
        >
          <Typography
            color='secondary'
            sx={{ fontSize: 16, fontFamily: "Yekan-Medium" }}
          >
            شنبه و یک‌شنبه
          </Typography>
          <Typography
            color='secondary'
            sx={{ fontSize: 16, fontFamily: "Yekan-Medium" }}
          >
            {toPersian("10:00 تا 23:59")}
          </Typography>
        </Stack>
        <Stack
          flexDirection='row'
          justifyContent='space-between'
          py={1}
          sx={{ width: "100%", borderBottom: "1px dashed rgb(231, 231, 231)" }}
        >
          <Typography
            color='secondary'
            sx={{ fontSize: 16, fontFamily: "Yekan-Medium" }}
          >
            دوشنبه
          </Typography>
          <Typography
            color='secondary'
            sx={{ fontSize: 16, fontFamily: "Yekan-Medium" }}
          >
            {toPersian("12:30 تا 23:59")}
          </Typography>
        </Stack>
        <Stack
          flexDirection='row'
          justifyContent='space-between'
          py={1}
          sx={{ width: "100%", borderBottom: "1px dashed rgb(231, 231, 231)" }}
        >
          <Typography
            color='secondary'
            sx={{ fontSize: 16, fontFamily: "Yekan-Medium" }}
          >
            سه‌شنبه تا پنجشنبه
          </Typography>
          <Typography
            color='secondary'
            sx={{ fontSize: 16, fontFamily: "Yekan-Medium" }}
          >
            {toPersian("10:00 تا 23:59")}
          </Typography>
        </Stack>
        <Stack
          flexDirection='row'
          justifyContent='space-between'
          py={1}
          sx={{ width: "100%", borderBottom: "1px dashed rgb(231, 231, 231)" }}
        >
          <Typography
            color='secondary'
            sx={{ fontSize: 16, fontFamily: "Yekan-Medium" }}
          >
            جمعه{" "}
          </Typography>
          <Typography
            color='secondary'
            sx={{ fontSize: 16, fontFamily: "Yekan-Medium" }}
          >
            {toPersian("12:30 تا 23:59")}
          </Typography>
        </Stack>
      </Stack>
      <Stack alignItems='center' sx={{ width: { xs: "100%", md: "50%" } }}>
        <Typography color='primary' sx={{ fontSize: 20 }}>
          آدرس مجموعه
        </Typography>
        <Typography
          color='secondary'
          sx={{ fontSize: 16, fontFamily: "Yekan-Medium", mt: 2 }}
        >
          شهرک غرب، بلوار دادمان غربی، خیابان فخار مقدم، پلاک9
        </Typography>
        <Typography
          color='secondary'
          sx={{ fontSize: 16, fontFamily: "Yekan-Medium", my: 2 }}
        >
          تلفن:88581789
        </Typography>

        <img src={mapImage} alt='' width='80%' />
      </Stack>
    </Stack>
  );
};
