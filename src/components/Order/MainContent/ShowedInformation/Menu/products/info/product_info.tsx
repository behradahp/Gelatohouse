// React Stuff
import { JSX, useContext } from "react";
import { AppContext } from "../../../../../../../context/store";

//Material
import { Stack, Typography } from "@mui/material";

// Components
import { ProductPrice } from "./product_price";
import { AddProduct } from "./AddProduct/add_product";
import { ChangeProduct } from "./AddProduct/change_product";

// Interface
import { Food, Card } from "../../../../../../../@types/api.type";

export const ProductInfo: React.FC<Food> = ({ ...rest }): JSX.Element => {
  const cardContext = useContext(AppContext);

  const findCount = () => {
    let count = 0;
    cardContext!.card.forEach((item) => {
      if (item.id === rest.id) {
        count = item.count;
      }
    });

    return count;
  };

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

  const addToCard = () => {
    const itemExist = productExistInCard(rest.id);

    if (itemExist.exist) {
      const newCard = JSON.parse(JSON.stringify(cardContext.card));
      newCard[itemExist.index!].count += 1;

      cardContext.setCard(newCard);
      return;
    }

    cardContext.setCard([
      ...cardContext.card,
      {
        id: rest.id,
        item: { ...rest },
        count: 1,
      },
    ]);
  };

  const removerFromCard = () => {
    const itemExist = productExistInCard(rest.id);
    const newCard = JSON.parse(JSON.stringify(cardContext.card));

    if (newCard[itemExist.index!].count === 1) {
      const newCard2 = newCard.filter((item: Card) => item.id != rest.id);
      cardContext.setCard(newCard2);

      return;
    }

    newCard[itemExist.index!].count -= 1;
    cardContext.setCard(newCard);
  };

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        border: "2px solid rgb(231, 231, 231)",
        borderRadius: "0 0 4px 4px",
      }}
      justifyContent='space-around'
      p={1}
    >
      <Typography>{rest.title}</Typography>

      <Stack flexDirection='row' justifyContent='space-between'>
        <ProductPrice
          price={rest.price}
          discount={rest.discount}
          discountPercentage={rest.discountPercentage}
        />

        {productExistInCard(rest.id).exist ? (
          <ChangeProduct
            addToCard={addToCard}
            removerFromCard={removerFromCard}
            count={findCount()}
          />
        ) : (
          <AddProduct addToCard={addToCard} />
        )}
      </Stack>
    </Stack>
  );
};
