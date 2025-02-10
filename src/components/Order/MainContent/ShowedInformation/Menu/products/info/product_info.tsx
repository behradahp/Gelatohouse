// React Stuff
import { JSX } from "react";

//Material
import { Stack, Typography } from "@mui/material";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

// Components
import { ProductPrice } from "./product_price";

//API

// Interface
interface ProductInfoProps {
  title: string;
  price: number;
  discountPercentage: number;
  discount: number;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({
  title,
  price,
  discountPercentage,
  discount,
}): JSX.Element => {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        border: "2px solid rgb(231, 231, 231)",
        borderRadius: "0 0 4px 4px",
      }}
      justifyContent='space-around'
      p={1}
    >
      <Typography>{title}</Typography>

      <Stack flexDirection='row' justifyContent='space-between'>
        <ProductPrice
          price={price}
          discount={discount}
          discountPercentage={discountPercentage}
        />

        <Stack position='relative' sx={{ cursor: "pointer" }}>
          <CloudOutlinedIcon color='primary' fontSize='large' />

          <Stack position='absolute' right={7} top={8}>
            <AddOutlinedIcon fontSize='small' />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
