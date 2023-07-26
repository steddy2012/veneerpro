import { HStack, Image, Spacer, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="15px">
      <HStack alignItems="center">
        <Text paddingLeft="5px" as="b" fontSize="24px">
          Overview
        </Text>
      </HStack>
      <Spacer />
    </HStack>
  );
};

export default NavBar;
