// React Stuff
import { JSX } from "react";

//Material
import { Button, Stack, Typography } from "@mui/material";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";

export const ChangeProduct: React.FC<{
  removerFromCard: () => void;
  addToCard: () => void;
  count: number;
}> = ({ addToCard, removerFromCard, count }): JSX.Element => {
  return (
    <Stack
      flexDirection='row'
      alignItems='center'
      justifyContent='space-between'
      sx={{ width: 90 }}
    >
      <Button
        sx={{ padding: 0, minWidth: "min-content" }}
        onClick={removerFromCard}
      >
        <Stack position='relative' sx={{ cursor: "pointer" }}>
          <CloudOutlinedIcon color='primary' fontSize='large' />

          <Stack position='absolute' right={7} top={8}>
            <RemoveOutlinedIcon fontSize='small' />
          </Stack>
        </Stack>
      </Button>
      <Typography>{count.toLocaleString("fa")}</Typography>
      <Button sx={{ padding: 0, minWidth: "min-content" }} onClick={addToCard}>
        <Stack position='relative' sx={{ cursor: "pointer" }}>
          <CloudOutlinedIcon color='primary' fontSize='large' />

          <Stack position='absolute' right={7} top={8}>
            <AddOutlinedIcon fontSize='small' />
          </Stack>
        </Stack>
      </Button>
    </Stack>
  );
};
