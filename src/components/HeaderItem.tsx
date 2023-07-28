import React from "react";
import { Flex, Text, Icon, Link, Menu, MenuButton } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface HeaderItemProps {
  title: string;
  active: any;
  href: string;
}

const HeaderItem: React.FC<HeaderItemProps> = ({ title, active, href }) => {
  return (
    <Flex mt={30} flexDir="column" w="100%" alignItems="flex-start">
      <Menu placement="right">
        <Link
          as={RouterLink}
          to={href}
          backgroundColor={active ? "#0950e9" : "transparent"} // Highlight the background in blue when active
          textColor={active ? "white" : "#58555E"} // Change the text color to white when active
          fontSize="l"
          fontWeight={active ? "bold" : "normal"}
          p={3}
          borderRadius={8}
          _hover={{
            textColor: active ? "white" : "#0950e9", // Change text color to blue for non-active items on hover
            backgroundColor: active ? "#0950e9" : "#f0f5fa", // Use blue background only for non-active items on hover
            "& svg": {
              color: active ? "white" : "#0950e9", // Change icon color to blue for non-active items on hover
            },
          }}
          _active={{
            backgroundColor: "#0950e9", // Keep blue background on active item even when clicked
          }}
          // onClick={() => setActivePage(title)} // Set the active page when the item is clicked
          w="100%"
        >
          <MenuButton w="100%">
            <Flex>
              <Text fontFamily="sans-serif" as="b" display="flex">
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
};

export default HeaderItem;
