import { createContext } from "react";
import { Card } from "../@types/api.type";

export const AppContext = createContext<{
  card: Card[];
  setCard: React.Dispatch<React.SetStateAction<Card[]>>;
}>({ card: [], setCard: () => {} });
