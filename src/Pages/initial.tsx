// React Stuff
import { JSX } from "react";

// Material
import { Skeleton } from "@mui/material";

// Components
import { Slider } from "../components/common/Slider/slider";
import { InitialPageModal } from "../components/Initial/modal";
import { SliderError } from "../components/common/Slider/slider_error";

// API
import { useAxios } from "../hooks/useAxios";
import { API_URL } from "../constants/apiURLs";
import { SliderImages } from "../@types/api.type";

export const InitialPage: React.FC = (): JSX.Element => {
  const { data, isError, isLoading } = useAxios<any, SliderImages[]>({
    method: "get",
    url: API_URL.GetSliderImages,
  });

  if (isLoading) {
    return (
      <Skeleton
        variant='rectangular'
        animation='wave'
        width='100%'
        height={400}
      />
    );
  }

  if (isError) {
    return (
      <>
        <InitialPageModal />
        <SliderError />
      </>
    );
  }

  return (
    <>
      <InitialPageModal />
      <Slider
        {...{
          autoPlay: true,
          showArrows: false,
          showStatus: false,
          showIndicators: false,
          showThumbs: false,
          animationHandler: "fade",
          stopOnHover: false,
          infiniteLoop: true,
        }}
        images={[...data!.map((image) => image.src)]}
        sx={{
          width: {
            xs: 1500,
            md: "100%",
          },
        }}
      />
    </>
  );
};
