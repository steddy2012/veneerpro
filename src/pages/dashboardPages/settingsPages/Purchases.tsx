import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Purchases = () => {
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
        <Heading fontFamily="sans-serif" textColor="#58555E" mb={4}>
          Purchases
        </Heading>
        <Text fontFamily="sans-serif" textColor="#58555E" fontSize="1em" mb={4}>
          Thinking of implamenting stripe api here and subscriptions. Will worry
          about it later.
        </Text>
      </GridItem>
    </Grid>
  );
};

export default Purchases;
