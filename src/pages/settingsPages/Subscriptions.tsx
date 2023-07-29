import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";
import SubscriptionsComp from "src/components/settingsPagesComponents/SubscriptionsComp";

const Subscriptions = () => {
  return (
    <Grid
      h="100%"
      templateRows="repeat(1, 1fr)"
      templateColumns="repeat(1, 1fr)"
      gap={4}
    >
      <GridItem
        marginLeft={8}
        marginRight={8}
        marginTop={8}
        marginBottom={8}
        p={4}
        colSpan={2}
        bg="white"
        borderRadius="2xl"
        boxShadow="lg"
        overflowY="auto"
      >
        <SubscriptionsComp />
      </GridItem>
    </Grid>
  );
};

export default Subscriptions;
