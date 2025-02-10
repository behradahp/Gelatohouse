import { createTheme } from "@mui/material/styles";

import YekanBold from "../assets/fonts/YekanBakh-Bold.ttf";
import YekanFat from "../assets/fonts/YekanBakh-Fat.ttf";
import YekanHairline from "../assets/fonts/YekanBakh-Hairline.ttf";
import YekanHeavy from "../assets/fonts/YekanBakh-Heavy.ttf";
import YekanLight from "../assets/fonts/YekanBakh-Light.ttf";
import YekanMedium from "../assets/fonts/YekanBakh-Medium.ttf";
import YekanRegular from "../assets/fonts/YekanBakh-Regular.ttf";
import YekanThin from "../assets/fonts/YekanBakh-Thin.ttf";

export const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: [
      "Yekan-Bold",
      "Yekan-Fat",
      "Yekan-Hairline",
      "Yekan-Heavy",
      "Yekan-Light",
      "Yekan-Medium",
      "Yekan-Regular",
      "Yekan-Thin",
    ].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Yekan-Bold';
          src: url(${YekanBold});
        }
        @font-face {
          font-family: 'Yekan-Fat';
          src: url(${YekanFat});
        }
        @font-face {
          font-family: 'Yekan-Hairline';
          src: url(${YekanHairline});
        }
        @font-face {
          font-family: 'Yekan-Heavy';
          src: url(${YekanHeavy});
        }
        @font-face {
          font-family: 'Yekan-Light';
          src: url(${YekanLight});
        }
        @font-face {
          font-family: 'Yekan-Medium';
          src: url(${YekanMedium});
        }
        @font-face {
          font-family: 'Yekan-Regular';
          src: url(${YekanRegular});
        }
        @font-face {
          font-family: 'Yekan-Thin';
          src: url(${YekanThin});
        }
      `,
    },
  },
  palette: {
    primary: {
      main: "#00B3C4",
      contrastText: "white",
    },
    secondary: {
      main: "#484849",
      contrastText: "#484849",
    },
  },
});
