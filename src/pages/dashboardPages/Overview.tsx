import { Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react"; // Assuming you're using Chakra UI or import from your chosen UI library
import Tab1 from "src/components/overview/OverviewTab1";
import Tab2 from "src/components/overview/OverviewTab2";
import Tab3 from "src/components/overview/OverviewTab3";

const Overview = () => {
  return (
    <Grid
      h="100%"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(4, 1fr)"
      gap={4}
    >
      <GridItem
        marginLeft={8}
        marginRight={1}
        marginTop={8}
        marginBottom={1}
        p={4}
        colSpan={2}
        bg="white"
        borderRadius="2xl"
        boxShadow="lg"
      >
        <Tab1 />
      </GridItem>
      <GridItem
        marginLeft={1}
        marginRight={8}
        marginTop={8}
        marginBottom={1}
        p={4}
        colSpan={2}
        bg="white"
        borderRadius="2xl"
        boxShadow="lg"
      >
        <Tab2 />
      </GridItem>
      <GridItem
        marginLeft={8}
        marginRight={8}
        marginTop={1}
        marginBottom={8}
        p={4}
        colSpan={4}
        bg="white"
        borderRadius="2xl"
        boxShadow="lg"
      >
        <Tab3 />
      </GridItem>
    </Grid>
  );
};

export default Overview;
