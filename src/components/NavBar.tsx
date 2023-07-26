import { HStack, Image, Spacer, Text } from "@chakra-ui/react";
import logo from "../assets/logoSquare.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="15px">
      <HStack alignItems="center">
        <Image src={logo} boxSize="75px" />
        <Text paddingLeft="15px" as="b" fontSize="24px">
          Overview
        </Text>
      </HStack>
      <Spacer />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
