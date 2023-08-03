import { Grid, GridItem } from "@chakra-ui/react";

const Calculator = () => {
  return (
    <Grid
      h="100%"
      templateRows="repeat(1, 1fr)"
      templateColumns="repeat(20, 1fr)"
      gap={4}
    >
      <GridItem
        marginLeft={8}
        marginRight={1}
        marginTop={8}
        marginBottom={8}
        p={4}
        colSpan={17}
        bg="white"
        borderRadius="2xl"
        boxShadow="lg"
      >
        1
      </GridItem>
      <GridItem
        marginLeft={1}
        marginRight={8}
        marginTop={8}
        marginBottom={8}
        p={4}
        colSpan={3}
        bg="white"
        borderRadius="2xl"
        boxShadow="lg"
      >
        2
      </GridItem>
    </Grid>
  );
};

export default Calculator;
