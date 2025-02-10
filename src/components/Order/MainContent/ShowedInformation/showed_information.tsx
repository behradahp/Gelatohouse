// React Stuff
import { JSX } from "react";

// Components
import { Menu } from "./Menu/menu";
import { BranchInfo } from "./branch_info";

// Interface
interface ShowedInformationProps {
  selectedInfo: string;
}

export const ShowedInformation: React.FC<ShowedInformationProps> = ({
  selectedInfo,
}): JSX.Element => {
  if (selectedInfo === "menu") {
    return <Menu />;
  }

  return <BranchInfo />;
};
