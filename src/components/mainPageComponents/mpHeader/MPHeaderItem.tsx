import React from "react";
import { Flex, Text, Icon, Link, Menu, MenuButton } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface MPHeaderItemProps {
  title: string;
  active: any;
  href: string;
}

const MPHeaderItem: React.FC<MPHeaderItemProps> = ({ title, active, href }) => {
  return (
    <Flex mt={30} flexDir="column" w="100%" alignItems="flex-start">
      <Menu placement="right">
        <Link
          as={RouterLink}
          to={href}
          backgroundColor={active ? "#f0f5fa" : "transparent"} // Highlight the background in blue when active
          textColor={active ? "#0950e9" : "#58555E"} // Change the text color to white when active
          fontSize="l"
          fontWeight={active ? "bold" : "normal"}
          p={3}
          borderRadius={8}
          _hover={{
            textColor: active ? "#0950e9" : "#0950e9", // Change text color to blue for non-active items on hover
            backgroundColor: active ? "#f0f5fa" : "#f0f5fa", // Use blue background only for non-active items on hover
          }}
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

export default MPHeaderItem;
