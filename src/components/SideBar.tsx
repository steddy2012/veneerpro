import { Divider, Flex, Text, Heading, Avatar, Image } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react"; // Remove curly braces
import logo from "../assets/logoSquare.webp";
import logoRectangle from "../assets/logoRectangle.webp";
import {
  BiHome,
  BiBox,
  BiCalculator,
  BiBarChartSquare,
  BiCog,
} from "react-icons/bi";
import React, { useState } from "react";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [activePage, setActivePage] = useState("Overview"); // Initialize the active page to "Overview"
  return (
    <Flex
      pos="sticky"
      left="5"
      h="100vh"
      marginTop="0"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.10)"
      borderRadius="0px"
      w="200px"
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex mb={1} p="2%" flexDir="column" alignItems="flex-start">
        <Image src={logoRectangle} alt="VeneerPro logo" />
        <Divider display="flex" />
      </Flex>
      <Flex
        p="5%"
        flexGrow={1}
        flexDirection="column"
        alignItems="flex-start"
        as="nav"
      >
        <NavItem
          icon={BiHome}
          title="Overview"
          active={activePage === "Overview"}
          setActivePage={setActivePage}
        />
        <NavItem
          icon={BiBox}
          title="Projects"
          active={activePage === "Projects"}
          setActivePage={setActivePage}
        />
        <NavItem
          icon={BiCalculator}
          title="Calculator"
          active={activePage === "Calculator"}
          setActivePage={setActivePage}
        />
        <NavItem
          icon={BiBarChartSquare}
          title="Reports"
          active={activePage === "Reports"}
          setActivePage={setActivePage}
        />
        <NavItem
          icon={BiCog}
          title="Settings"
          active={activePage === "Settings"}
          setActivePage={setActivePage}
        />
      </Flex>

      <Flex p="5%" flexDir="column" w="100%" alignItems="flex-start" mb={4}>
        <Divider display="flex" />
        <Flex mt={4} align="center">
          <Avatar size="sm" src={logo} />
          <Flex flexDir="column" ml={4} display="flex">
            <Heading as="h3" size="sm">
              Stefano C
            </Heading>
            <Text color="grey">Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SideBar;
