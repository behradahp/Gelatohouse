// React Stuff
import { JSX } from "react";

// Material
import { Button, Stack, Typography } from "@mui/material";

// API
import { Category } from "../../../../../../@types/api.type";

export const CategoryCard: React.FC<{ category: Category }> = ({
  category,
}): JSX.Element => {
  return (
    <Button
      sx={{ flexShrink: 0, width: "100px" }}
      href={`#category${category.id}`}
    >
      <Stack
        alignItems='center'
        flexShrink={0}
        py='10px'
        sx={{ width: "100px" }}
        spacing={1}
      >
        <img src={category.customIcon} alt='category-icon' width={40} />

        <Typography
          color='secondary'
          textAlign='center'
          sx={{ fontSize: "13px", fontFamily: "Yekan-Medium" }}
        >
          {category.title}
        </Typography>
      </Stack>
    </Button>
  );
};
