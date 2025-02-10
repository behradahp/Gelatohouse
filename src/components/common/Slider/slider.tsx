// React Stuff
import { JSX } from "@emotion/react/jsx-runtime";

// Packages
import { Carousel, CarouselProps } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Material
import { Stack } from "@mui/material";

// interface
interface SliderProps extends Partial<CarouselProps> {
  width?: string;
  height?: string;
  images: string[];
}

export const Slider: React.FC<SliderProps> = ({
  width,
  height,
  images,
  ...rest
}): JSX.Element => {
  return (
    <Stack dir='ltr' alignItems='center'>
      <Stack sx={{ width: width || "100%" }}>
        <Carousel {...rest}>
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
