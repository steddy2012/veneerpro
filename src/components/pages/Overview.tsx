import { Flex, Heading, Text } from "@chakra-ui/react"; // Assuming you're using Chakra UI or import from your chosen UI library

const Overview = () => {
  return (
    <Flex p="4" flexDirection="column">
      <Heading as="h1" size="xl" mb="4">
        Overview Page
      </Heading>
      <Text fontSize="lg">Welcome to the Overview page!</Text>
      <Text mt="4">Show charts here</Text>
    </Flex>
  );
};

export default Overview;
