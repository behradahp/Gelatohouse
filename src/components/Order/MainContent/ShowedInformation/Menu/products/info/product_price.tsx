// React Stuff
import { JSX } from "react";

//Material
import { Stack, Typography } from "@mui/material";

//Interface
interface ProductPriceProps {
  price: number;
  discountPercentage: number;
  discount: number;
}

export const ProductPrice: React.FC<ProductPriceProps> = ({
  price,
  discountPercentage,
  discount,
}): JSX.Element => {
  return (
    <Stack>
      {discountPercentage != 0.0 ? (
        <Stack position='relative'>
          <Stack
            position='absolute'
            top={8}
            right={5}
            sx={{
              width: "100%",
              height: "1px",
              backgroundColor: "#888888",
              transform: "rotate(-8deg)",
            }}
          ></Stack>
          <Typography
            sx={{
              fontSize: 12,
              fontFamily: "Yekan-Regular",
              color: "#888888",
            }}
          >
            {price.toLocaleString("fa")}
          </Typography>
        </Stack>
      ) : (
        <></>
      )}
      <Typography
        sx={{
          fontSize: 16,
          fontFamily: "Yekan-Regular",
          color: "#484849",
        }}
      >
        {(price - discount).toLocaleString("fa")}
      </Typography>
    </Stack>
  );
};
