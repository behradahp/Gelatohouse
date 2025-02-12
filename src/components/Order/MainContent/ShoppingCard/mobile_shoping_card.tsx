// React Stuff
import { JSX, useContext, useState } from "react";

//Material
import { Button, Stack, Typography } from "@mui/material";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";

// Context
import { AppContext } from "../../../../context/store";

// Components
import { MobileCardModal } from "./mobile_card_modal";

export const MobileShoppingCard: React.FC = (): JSX.Element => {
  const cardContext = useContext(AppContext);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const calculateTotalPrice = () => {
    const totalPrice = cardContext.card.reduce((acc, curr) => {
      if (curr.item.discountPercentage === 0) {
        return acc + curr.item.price * curr.count;
      }

      return acc + (curr.item.price - curr.item.discount) * curr.count;
    }, 0);
    return totalPrice;
  };

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>
        <Stack
          position='fixed'
          bottom={0}
          left={0}
          flexDirection='row'
          justifyContent='space-between'
          p={1}
          sx={{
            width: "100%",
            bgcolor: "#00B3C4",
            display: cardContext.card.length ? "flex" : "none",
          }}
          zIndex={10000}
        >
          <Stack flexDirection='row' gap={1}>
            <LocalGroceryStoreOutlinedIcon sx={{ color: "white" }} />
            <Typography sx={{ color: "white" }}>
              سبد خرید ({cardContext.card.length.toLocaleString("fa")})
            </Typography>
          </Stack>

          <Stack>
            <Typography sx={{ color: "white" }}>
              {calculateTotalPrice().toLocaleString("fa")} تومان
            </Typography>
          </Stack>
        </Stack>
      </Button>

      <MobileCardModal
        isOpen={isModalOpen}
        closeFunction={() => setIsModalOpen(false)}
      />
    </>
  );
};
