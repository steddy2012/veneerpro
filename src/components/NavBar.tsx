import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logoSquare.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>VeneerPro Navbar</Text>
    </HStack>
  );
};

export default NavBar;
