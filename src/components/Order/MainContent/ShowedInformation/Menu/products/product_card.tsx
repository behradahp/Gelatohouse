// React Stuff
import { JSX } from "react";

//Material
import { Stack } from "@mui/material";

// Components
import { ProductDiscountBadge } from "./product_discount_badge";
import { ProductInfo } from "./info/product_info";
import { ProductIngradient } from "./info/product_indradient";

//API
import { Sub } from "../../../../../../@types/api.type";

export const ProductCard: React.FC<{ sub: Sub }> = ({ sub }): JSX.Element => {
  return (
    <Stack key={sub.id} flexDirection='row' gap={2} mt={1} flexWrap='wrap'>
      {sub.food.map((food) => {
        return (
          <Stack
            position='relative'
            key={food.id}
            sx={{
              width: { xs: "100%", md: 285 },
              borderRadius: 1,
              overflow: "hidden",
            }}
          >
            <ProductIngradient text={food.ingredient} />

            {food.discountPercentage != 0.0 ? (
              <ProductDiscountBadge discount={food.discountPercentage} />
            ) : (
              <></>
            )}
            <img
              src={food.img.replace("#SIZEOFIMAGE#", "560x350")}
              alt='product-image'
              width='100%'
            />

            <ProductInfo {...food} />
          </Stack>
        );
      })}
    </Stack>
  );
};
