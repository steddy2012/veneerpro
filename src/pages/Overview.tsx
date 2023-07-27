import { Flex, Heading, Text } from '@chakra-ui/react'; // Assuming you're using Chakra UI or import from your chosen UI library

const Overview = () => {
  return (
    <Flex p='4' flexDirection='column'>
      <Heading as='h1' size='xl' mb='4'>
        Overview Page
      </Heading>
      <Text fontSize='lg'>
        Welcome to the Overview page! This is where you can provide an overview
        of your application or project.
      </Text>
      <Text mt='4'>
        You can add any relevant information, charts, statistics, or anything
        else you want to showcase here.
      </Text>
      {/* Add more content and components as needed */}
    </Flex>
  );
};

export default Overview;
