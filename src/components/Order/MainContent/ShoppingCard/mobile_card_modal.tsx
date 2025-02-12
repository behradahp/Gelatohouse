// React Stuff
import { JSX, useContext } from "react";

//Material
import { Button, IconButton, Stack, Typography } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

//Context
import { AppContext } from "../../../../context/store";
import { Card } from "../../../../@types/api.type";

export const MobileCardModal: React.FC<{
  isOpen: boolean;
  closeFunction: () => void;
}> = ({ isOpen, closeFunction }): JSX.Element => {
  const cardContext = useContext(AppContext);

  const productExistInCard = (id: number) => {
    const isExist = {
      exist: false,
      index: -1,
    };
    cardContext!.card.forEach((item, index) => {
      if (item.id === id) {
        isExist.exist = true;
        isExist.index = index;
        return;
      }
    });

    return isExist;
  };

  const addToCard = (id: number) => {
    const itemExist = productExistInCard(id);

    const newCard = JSON.parse(JSON.stringify(cardContext.card));
    newCard[itemExist.index!].count += 1;

    cardContext.setCard(newCard);
  };

  const removerFromCard = (id: number) => {
    const itemExist = productExistInCard(id);
    const newCard = JSON.parse(JSON.stringify(cardContext.card));

    if (newCard[itemExist.index!].count === 1) {
      const newCard2 = newCard.filter((item: Card) => item.id != id);
      cardContext.setCard(newCard2);

      if (newCard2.length === 0) closeFunction();

      return;
    }

    newCard[itemExist.index!].count -= 1;
    cardContext.setCard(newCard);
  };

  const calculateDiscount = () => {
    const totalDiscount = cardContext.card.reduce(
      (acc, curr) => acc + curr.item.discount * curr.count,
      0
    );
    return totalDiscount;
  };

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
    <Stack
      alignItems='end'
      position='fixed'
      top={0}
      left={0}
      zIndex={10000}
      sx={{
        width: "100%",
        height: "100vh",
        bgcolor: "rgba(0, 0, 0, 0.6)",
        display: isOpen ? "flex" : "none",
      }}
    >
      <Stack sx={{ height: "100%", bgcolor: "white", maxWidth: "min-content" }}>
        <Stack
          flexDirection='row'
          gap={20}
          alignItems='center'
          px={2}
          py={1}
          sx={{ borderBottom: "1px solid #F0E0E4" }}
        >
          <Typography
            variant='h6'
            color='secondary'
            sx={{ minWidth: "max-content" }}
          >
            سبد خرید ({cardContext.card.length.toLocaleString("fa")})
          </Typography>

          <Stack flexDirection='row'>
            <IconButton
              onClick={() => {
                cardContext.setCard([]);
                closeFunction();
              }}
            >
              <DeleteOutlinedIcon />
            </IconButton>
            <IconButton onClick={closeFunction}>
              <CloseOutlinedIcon />
            </IconButton>
          </Stack>
        </Stack>

        <Stack>
          {cardContext.card.map((item) => {
            return (
              <Stack
                key={item.id}
                flexDirection='row'
                justifyContent='space-between'
                alignItems='center'
                p={2}
                sx={{ borderBottom: "1px solid #F0E0E4" }}
              >
                <Stack>
                  <Stack flexDirection='row' alignItems='center' gap='2px'>
                    <Typography>{item.item.title}</Typography>
                  </Stack>

                  <Typography sx={{ fontFamily: "Yekan-Regular" }}>
                    {item.item.discountPercentage !== 0
                      ? (item.item.price - item.item.discount).toLocaleString(
                          "fa"
                        )
                      : item.item.price.toLocaleString("fa")}
                  </Typography>
                </Stack>

                <Stack flexDirection='row' alignItems='center' gap='3px'>
                  <IconButton onClick={() => removerFromCard(item.id)}>
                    <RemoveCircleOutlineOutlinedIcon
                      fontSize='large'
                      color='primary'
                    />
                  </IconButton>
                  <Typography>{item.count.toLocaleString("fa")}</Typography>
                  <IconButton onClick={() => addToCard(item.id)}>
                    <AddCircleOutlineOutlinedIcon
                      fontSize='large'
                      color='primary'
                    />
                  </IconButton>
                </Stack>
              </Stack>
            );
          })}

          {calculateDiscount() !== 0 ? (
            <Stack flexDirection='row' justifyContent='space-between' p={2}>
              <Typography sx={{ fontFamily: "Yekan-Regular" }}>
                تخفیف
              </Typography>
              <Typography sx={{ fontFamily: "Yekan-Regular" }}>
                {calculateDiscount().toLocaleString("fa")} تومان
              </Typography>
            </Stack>
          ) : (
            <></>
          )}

          <Stack flexDirection='row' justifyContent='space-between' p={2}>
            <Typography sx={{ fontSize: 20 }}>هزینه کل</Typography>
            <Typography sx={{ fontSize: 20 }}>
              {calculateTotalPrice().toLocaleString("fa")} تومان
            </Typography>
          </Stack>

          <Button variant='contained' sx={{ margin: "0 14px" }}>
            تکمیل سفارش
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
