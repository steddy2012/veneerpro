import React from "react";
import {
  Flex,
  Text,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";

interface NavItemProps {
  title: string;
  icon: any;
  active: any;
}

const NavItem: React.FC<NavItemProps> = ({ title, icon, active }) => {
  return (
    <Flex mt={30} flexDir="column" w="100%" alignItems="flex-start">
      <Menu placement="right">
        <Link
          backgroundColor={active ? "#0950e9" : "transparent"} // Highlight the background in blue when active
          textColor={active ? "white" : "#58555E"} // Change the text color to white when active
          fontSize="l"
          fontWeight={active ? "bold" : "normal"}
          p={3}
          borderRadius={8}
          _hover={{
            textColor: "#0950e9",
            backgroundColor: "#f0f5fa",
            "& svg": {
              color: active ? "white" : "#0950e9", // Change icon color to blue on hover when not active
            },
          }}
          w="100%"
        >
          <MenuButton w="100%">
            <Flex>
              <Icon
                as={icon}
                fontSize="xl"
                color={active ? "white" : "#58555E"} // Change the icon color to white when active
              />
              <Text fontFamily="sans-serif" as="b" ml={5} display="flex">
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
};

export default NavItem;
