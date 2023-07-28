import { Grid, GridItem } from "@chakra-ui/react"; // Assuming you're using Chakra UI or import from your chosen UI library

const Projects = () => {
  return (
    <Grid
      h="100%"
      templateRows="repeat(1, 1fr)"
      templateColumns="repeat(4, 1fr)"
      gap={4}
    >
      <GridItem
        marginLeft={8}
        marginRight={1}
        marginTop={8}
        marginBottom={8}
        p={4}
        colSpan={2}
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
        colSpan={2}
        bg="white"
        borderRadius="2xl"
        boxShadow="lg"
      >
        2
      </GridItem>
    </Grid>
  );
};

export default Projects;
