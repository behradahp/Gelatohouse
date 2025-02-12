// React Stuff
import { JSX, useEffect, useRef, useState } from "react";

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
  const [scrollCount, setScrollCount] = useState<number>(1);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref) setScrollCount(ref.current!.clientWidth / 100);
  }, [ref]);

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
        width: "100%",
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

      <Stack ref={ref} sx={{ width: "100%", overflow: "hidden" }}>
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
            categories && itemIndex < categories?.length - scrollCount
              ? ""
              : "#CACACA",
        }}
        onClick={
          categories && itemIndex < categories?.length - scrollCount
            ? () => setItemIndex((prev) => prev + 1)
            : () => {}
        }
      >
        <ArrowBackIosNewIcon />
      </Button>
    </Stack>
  );
};
