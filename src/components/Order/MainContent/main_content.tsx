// React Stuff
import { JSX, useState } from "react";

// Material
import { Stack } from "@mui/material";

// Components
import { DeliveryInfo } from "./Delivery/delivery";
import { ShoppingCard } from "./ShoppingCard/shopping_card";
import { SelectStoreBranche } from "./SelectStoreBranch/select_store_branch";
import { SelectServiceRange } from "./SelectServiceRange/select_service_range";
import { ShowedInformationButtons } from "./ShowedInformation/showed_information_buttons";
import { ShowedInformation } from "./ShowedInformation/showed_information";

export const OrderPageMainContent: React.FC = (): JSX.Element => {
  const [selectedInfo, setSelectedInfo] = useState<string>("menu");

  return (
    <Stack spacing={5} my={10} px='5%'>
      <Stack flexDirection='row' gap={5}>
        <Stack flexDirection='row' alignItems='flex-end' gap={2} flexGrow={1}>
          <SelectStoreBranche />
          <SelectServiceRange />
        </Stack>

        <Stack>
          <DeliveryInfo />
        </Stack>
      </Stack>

      <Stack flexDirection='row' gap={5}>
        <Stack flexGrow={1}>
          <ShowedInformationButtons
            selectedInfo={selectedInfo}
            setSelectedInfo={setSelectedInfo}
          />
          <ShowedInformation selectedInfo={selectedInfo} />
        </Stack>

        <Stack>
          <ShoppingCard />
        </Stack>
      </Stack>
    </Stack>
  );
};
