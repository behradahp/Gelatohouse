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
import { MobileShoppingCard } from "./ShoppingCard/mobile_shoping_card";

export const OrderPageMainContent: React.FC = (): JSX.Element => {
  const [selectedInfo, setSelectedInfo] = useState<string>("menu");

  return (
    <Stack
      spacing={5}
      my={10}
      px='2%'
      sx={{
        marginTop: { xs: 2, md: 10 },
      }}
    >
      <Stack
        gap={5}
        sx={{
          flexDirection: {
            xs: "column",
            md: "row",
          },
          alignItems: {
            xs: "center",
            md: "end",
          },
        }}
      >
        <Stack
          flexDirection='row'
          alignItems='flex-end'
          gap={2}
          flexGrow={1}
          sx={{
            width: {
              xs: "100%",
              md: "auto",
            },
          }}
        >
          <SelectStoreBranche />
          <SelectServiceRange />
        </Stack>

        <Stack sx={{ width: { xs: "100%", md: "auto" } }}>
          <DeliveryInfo />
        </Stack>
      </Stack>

      <Stack
        flexDirection='row'
        sx={{
          gap: {
            xs: 0,
            lg: 5,
          },
        }}
      >
        <Stack
          sx={{
            width:
              selectedInfo === "menu"
                ? { xs: "100%", lg: "calc(70% - 40px)" }
                : "100%",
            flexGrow: { lg: 0, xl: 1 },
          }}
        >
          <ShowedInformationButtons
            selectedInfo={selectedInfo}
            setSelectedInfo={setSelectedInfo}
          />
          <ShowedInformation selectedInfo={selectedInfo} />
        </Stack>

        <Stack
          flexShrink={0}
          sx={{
            width: { xs: "0%", lg: "30%", xl: "400px" },
            flexGrow: { lg: 0, xl: 0 },
            display: {
              xs: "none",
              lg: "flex",
            },
          }}
        >
          <ShoppingCard />
        </Stack>

        <Stack
          position={"fixed"}
          sx={{
            display: {
              xs: "flex",
              lg: "none",
            },
          }}
        >
          <MobileShoppingCard />
        </Stack>
      </Stack>
    </Stack>
  );
};
