import { HStack, Image, Spacer, Text } from "@chakra-ui/react";

import { useLocation } from "react-router-dom";
import ColorModeSwitch from "../ColorModeSwitch";

const Header = () => {
  const { pathname } = useLocation(); // this line uses the pathname in the url to highlight the sidebar tabs: /dashboard/overview. if it matches it highlights

  const lastWord =
    pathname
      .split("/")
      .filter((word) => word !== "")
      .pop() || "";

  const capitalizedLastWord =
    lastWord.charAt(0).toUpperCase() + lastWord.slice(1); //Capitalizes the name

  return (
    <HStack justifyContent="space-between" padding="15px">
      <HStack alignItems="center">
        <Text paddingLeft="5px" as="b" fontSize="24px">
          {capitalizedLastWord}
        </Text>
      </HStack>
      <Spacer />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Header;
