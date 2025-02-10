// React Stuff
import { JSX } from "react";

// Material
import { Button, ButtonProps, Stack } from "@mui/material";

// Constant styles
const selectedStyles: ButtonProps = {
  variant: "contained",
  sx: {
    fontSize: "16px",
    padding: "16px 24px",
    backgroundColor: "white",
    color: "#484849",
    boxShadow: "none",
    borderRadius: "5px 5px 0 0",
    borderTop: "2px solid rgb(231, 231, 231)",
    borderLeft: "2px solid rgb(231, 231, 231)",
    borderRight: "2px solid rgb(231, 231, 231)",
  },
};

const unSelectedStyles: ButtonProps = {
  variant: "text",
  sx: {
    fontSize: "16px",
    padding: "16px 24px",
    color: "#484849",
    boxShadow: "none",
  },
};

// Interface
interface ShowedInformationButtonsProps {
  selectedInfo: string;
  setSelectedInfo: React.Dispatch<React.SetStateAction<string>>;
}

export const ShowedInformationButtons: React.FC<
  ShowedInformationButtonsProps
> = ({ selectedInfo, setSelectedInfo }): JSX.Element => {
  return (
    <Stack flexDirection='row' gap={0}>
      <Button
        {...(selectedInfo === "menu" ? selectedStyles : unSelectedStyles)}
        onClick={() => setSelectedInfo("menu")}
      >
        منو سفارش
      </Button>
      <Button
        {...(selectedInfo === "branch" ? selectedStyles : unSelectedStyles)}
        onClick={() => setSelectedInfo("branch")}
      >
        اطلاعات مجموعه
      </Button>
    </Stack>
  );
};
