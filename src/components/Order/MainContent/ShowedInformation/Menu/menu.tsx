// React Stuff
import { JSX } from "react";

// Material
import { Stack } from "@mui/material";

// Components
import { Categories } from "./categories/categories";
import { Products } from "./products/products";

// API
import { useAxios } from "../../../../../hooks/useAxios";
import { API_URL } from "../../../../../constants/apiURLs";
import { Category } from "../../../../../@types/api.type";

interface CategoryResponse {
  categories: Category[];
}
export const Menu: React.FC = (): JSX.Element => {
  const {
    data: categoryData,
    isError: categoryIsError,
    isLoading: CategoryIsLoading,
  } = useAxios<any, CategoryResponse>({ url: API_URL.GetCategories });

  return (
    <Stack
      sx={{
        backgroundColor: "white",
        borderLeft: "2px solid rgb(231, 231, 231)",
      }}
    >
      <Categories
        categories={categoryData?.categories}
        isError={categoryIsError}
        isLoading={CategoryIsLoading}
      />
      <Products categories={categoryData?.categories} />
    </Stack>
  );
};
