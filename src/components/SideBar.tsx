import { Divider, Flex, Text, Heading, Avatar, Image } from "@chakra-ui/react";

import logo from "../assets/logoSquare.webp";
import logoRectangle from "../assets/logoRectangle.webp";
import {
  BiHome,
  BiBox,
  BiCalculator,
  BiBarChartSquare,
  BiCog,
} from "react-icons/bi";
import SBItem from "./SBItem";

import { useLocation } from "react-router-dom";

const SideBar = ({}) => {
  const { pathname } = useLocation(); // this line uses the pathname in the url to highlight the sidebar tabs: /dashboard/overview. if it matches it highlights

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
        <SBItem
          icon={BiHome}
          title="Overview"
          active={pathname === "/dashboard/overview"}
          href="/dashboard/overview"
        />
        <SBItem
          icon={BiBox}
          title="Projects"
          active={pathname === "/dashboard/projects"}
          href="/dashboard/projects"
        />
        <SBItem
          icon={BiCalculator}
          title="Calculator"
          active={pathname === "/dashboard/calculator"}
          href="/dashboard/calculator"
        />
        <SBItem
          icon={BiBarChartSquare}
          title="Reports"
          active={pathname === "/dashboard/reports"}
          href="/dashboard/reports"
        />
        <SBItem
          icon={BiCog}
          title="Settings"
          active={pathname === "/dashboard/settings"}
          href="/dashboard/settings"
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
