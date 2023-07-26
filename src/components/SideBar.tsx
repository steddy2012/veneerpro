import { Divider, Flex, Text, Heading, Avatar } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react"; // Remove curly braces
import logo from "../assets/logoSquare.webp";
import { FiHome, FiFileText } from "react-icons/fi";
import {
  BiHome,
  BiBox,
  BiCalculator,
  BiBarChartSquare,
  BiCog,
} from "react-icons/bi";
import React, { useState } from "react";
import NavItem from "./NavItem";

const SideBar = () => {
  return (
    <Flex
      pos="sticky"
      left="5"
      h="100vh"
      marginTop="0"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.20)"
      borderRadius="0px"
      w="200px"
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex p="5%" flexDir="column" alignItems="flex-start" as="nav">
        <NavItem icon={BiHome} title="Overview" active />
        <NavItem icon={BiBox} title="Projects" />
        <NavItem icon={BiCalculator} title="Calculator" />
        <NavItem icon={BiBarChartSquare} title="Reports" />
        <NavItem icon={BiCog} title="Settings" />
      </Flex>

      <Flex p="5%" flexDir="column" w="100%" alignItems="flex-start" mb={4}>
        <Divider display="flex" />
        <Flex mt={4} align="center">
          <Avatar size="sm" src={logo} />
          <Flex flexDir="column" ml={4} display="flex">
            <Heading as="h3" size="sm">
              Stefano Campanella
            </Heading>
            <Text color="grey">Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SideBar;
