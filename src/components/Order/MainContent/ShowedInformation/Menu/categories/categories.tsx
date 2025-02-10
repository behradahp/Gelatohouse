// React Stuff
import { JSX } from "react";

// Material
import { Typography } from "@mui/material";

// Components
import { CategoryLoading } from "./category_loading";

// API
import { Category } from "../../../../../../@types/api.type";
import { CategoryList } from "./category_list";

interface CategoriesProps {
  categories?: Category[];
  isError: boolean;
  isLoading: boolean;
}

export const Categories: React.FC<CategoriesProps> = ({
  categories,
  isError,
  isLoading,
}): JSX.Element => {
  if (isError) {
    return <Typography>خطایی پیش آمده است</Typography>;
  }

  if (isLoading) {
    return <CategoryLoading />;
  }

  return <CategoryList categories={categories} />;
};
