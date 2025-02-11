// React Stuff
import { JSX } from "react";

//Material
import { Button, Stack } from "@mui/material";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

export const AddProduct: React.FC<{ addToCard: () => void }> = ({
  addToCard,
}): JSX.Element => {
  return (
    <Button sx={{ padding: 0 }} onClick={addToCard}>
      <Stack
        position='relative'
        alignItems='end'
        sx={{ cursor: "pointer", width: 90 }}
      >
        <CloudOutlinedIcon color='primary' fontSize='large' />

        <Stack position='absolute' right={7} top={8}>
          <AddOutlinedIcon fontSize='small' />
        </Stack>
      </Stack>
    </Button>
  );
};
