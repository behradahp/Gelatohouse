// React Stuff
import { JSX } from "react";

// Material
import { Button, Stack, Typography } from "@mui/material";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

// Components
import { ProductCard } from "./product_card";

// API
import { Category } from "../../../../../../@types/api.type";

export const Products: React.FC<{ categories?: Category[] }> = ({
  categories,
}): JSX.Element => {
  return (
    <Stack py={1} px={2}>
      {categories?.map((category) => {
        return (
          <Stack key={category.id} mb={4}>
            <Stack
              flexDirection='row'
              alignItems='center'
              gap={1}
              id={`category${category.id}`}
            >
              <Typography sx={{ fontSize: 20, color: "#8B8B8B" }}>
                {category.title}
              </Typography>

              <Button
                sx={{
                  minWidth: "min-content",
                  width: 33,
                  height: 33,
                  backgroundColor: "#F2F2F2",
                  borderRadius: 100,
                }}
              >
                <ShareOutlinedIcon fontSize='small' sx={{ color: "#8C8C8C" }} />
              </Button>
            </Stack>

            <Stack flexDirection='row' gap={2}>
              {category.sub.map((sub) => {
                return (
                  <Stack key={sub.id}>
                    <ProductCard sub={sub} />
                  </Stack>
                );
              })}
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
};
