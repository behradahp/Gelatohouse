// React Stuff
import { JSX, useEffect, useState } from "react";

// Material
import { Skeleton, Stack } from "@mui/material";

// Components
import { OrderPageWelcomeModal } from "../components/Order/Modal/modal";
import { OrderAccepting } from "../components/Order/OrderAccepting/order_accepint";
import { Slider } from "../components/common/Slider/slider";
import { SliderError } from "../components/common/Slider/slider_error";
import { OrderPageMainContent } from "../components/Order/MainContent/main_content";

// API
import { useAxios } from "../hooks/useAxios";
import { API_URL } from "../constants/apiURLs";
import { SliderImages } from "../@types/api.type";

export const OrderPage: React.FC = (): JSX.Element => {
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState<boolean>(false);

  const {
    data: sliderImages,
    isError: isSliderError,
    isLoading: isSliderLoading,
  } = useAxios<any, SliderImages[]>({ url: API_URL.GetSliderImages });

  useEffect(() => {
    const openModal = () => {
      setIsWelcomeModalOpen(true);
    };

    window.addEventListener("load", openModal);

    return () => {
      window.removeEventListener("load", openModal);
    };
  }, []);

  return (
    <Stack sx={{ backgroundColor: "#F9FAFB" }}>
      <OrderAccepting />

      <OrderPageWelcomeModal
        isOpen={isWelcomeModalOpen}
        closeFunction={() => setIsWelcomeModalOpen(false)}
      />

      {isSliderError ? (
        <SliderError width='90%' />
      ) : isSliderLoading ? (
        <Skeleton
          variant='rectangular'
          animation='wave'
          width='100%'
          height={400}
        />
      ) : (
        <Slider
          {...{
            autoPlay: true,
            showStatus: false,
            showThumbs: false,
            stopOnHover: false,
            showArrows: false,
            infiniteLoop: true,
          }}
          width='90%'
          images={[...sliderImages!.map((image) => image.src)]}
        />
      )}

      <OrderPageMainContent />
    </Stack>
  );
};
