import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import MPHeader from "./mpHeader/MPHeader";

function MainPageLayout() {
  const { pathname } = useLocation();

  return (
    <Grid
      templateAreas={`"header"
                      " main"`}
      gridTemplateRows={"80px 1fr"}
      gridTemplateColumns="1fr"
      h="100vh"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem bg="orange.300" area={"header"}>
        <MPHeader />
      </GridItem>
      <GridItem bg="gray.100" area={"main"}>
        <Outlet />
      </GridItem>
    </Grid>
  );
}

export default MainPageLayout;
