// React Stuff
import { JSX, useState } from "react";

// Material
import { Button, Stack } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

// Components
import { CategoryCard } from "./category_card";

// API
import { Category } from "../../../../../../@types/api.type";

export const CategoryList: React.FC<{ categories?: Category[] }> = ({
  categories,
}): JSX.Element => {
  const [itemIndex, setItemIndex] = useState<number>(0);

  return (
    <Stack
      position='sticky'
      top={0}
      zIndex={100}
      flexDirection='row'
      alignItems='center'
      justifyContent='space-between'
      px={2}
      sx={{
        borderBottom: "2px solid rgb(231, 231, 231)",
        backgroundColor: "white",
      }}
    >
      <Button
        color='secondary'
        sx={{
          minWidth: "min-content",
          color: itemIndex === 0 ? "#CACACA" : "",
        }}
        onClick={
          itemIndex !== 0 ? () => setItemIndex((prev) => prev - 1) : () => {}
        }
      >
        <ArrowForwardIosIcon />
      </Button>

      <Stack sx={{ width: "800px", overflow: "hidden" }}>
        <Stack
          flexDirection='row'
          sx={{
            transform: `translateX(-${100 * itemIndex}px)`,
            transition: "all 0.5s",
          }}
        >
          {categories?.map((category) => {
            return (
              <Stack key={category.id}>
                <CategoryCard category={category} />
              </Stack>
            );
          })}
        </Stack>
      </Stack>

      <Button
        color='secondary'
        sx={{
          minWidth: "min-content",
          color:
            categories && itemIndex === categories.length - 8 ? "#CACACA" : "",
        }}
        onClick={
          categories && itemIndex !== categories?.length - 8
            ? () => setItemIndex((prev) => prev + 1)
            : () => {}
        }
      >
        <ArrowBackIosNewIcon />
      </Button>
    </Stack>
  );
};
