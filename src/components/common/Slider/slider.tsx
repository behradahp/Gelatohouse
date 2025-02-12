// React Stuff
import { JSX } from "@emotion/react/jsx-runtime";

// Packages
import { Carousel, CarouselProps } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Material
import { Stack, SxProps, Theme } from "@mui/material";

// interface
interface SliderProps extends Partial<CarouselProps> {
  sx: SxProps<Theme>;
  images: string[];
}

export const Slider: React.FC<SliderProps> = ({
  sx,
  images,
  ...rest
}): JSX.Element => {
  return (
    <Stack
      dir='ltr'
      alignItems='center'
      sx={{ maxWidth: "100vh", overflow: "hidden" }}
    >
      <Stack sx={sx} alignItems='center'>
        <Carousel {...rest} width='100%'>
          {images.map((image) => {
            return (
              <Stack key={image}>
                <img src={image} alt='slider-image' />
              </Stack>
            );
          })}
        </Carousel>
      </Stack>
    </Stack>
  );
};
