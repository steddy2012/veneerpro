import {
  Divider,
  Flex,
  Text,
  Heading,
  Avatar,
  Image,
  Box,
  Spacer,
} from "@chakra-ui/react";
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
import LogoutButton from "./LogoutButton";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const SideBar = () => {
  const { pathname } = useLocation();
  const [activeProjects, setActiveProjects] = useState(false);
  const [activeSettings, setActiveSettings] = useState(false);

  useEffect(() => {
    setActiveProjects(pathname === "/dashboard/projects");
    setActiveSettings(pathname === "/dashboard/settings");
  }, [pathname]);

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
          active={
            pathname === "/dashboard/projects/incomplete" ||
            pathname === "/dashboard/projects/completed"
          }
          href="/dashboard/projects/incomplete"
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
          active={
            pathname === "/dashboard/settings/userProfile" ||
            pathname === "/dashboard/settings/companyProfile" ||
            pathname === "/dashboard/settings/team" ||
            pathname === "/dashboard/settings/subscriptions" ||
            pathname === "/dashboard/settings/purchases"
          }
          href="/dashboard/settings/userProfile"
        />
      </Flex>
      <Flex p="5%" flexDir="column" w="100%" alignItems="flex-start" mb={4}>
        <Divider display="flex" />
        <Flex mt={4} align="center" w="100%">
          {/* Image on the left */}
          <Avatar size="sm" src={logo} />

          {/* Name and user type in the middle */}
          <Box ml={4}>
            <Heading as="h3" size="sm">
              Stefano C
            </Heading>
            <Text color="grey">Admin</Text>
          </Box>

          {/* Logout button on the right */}
          <Spacer />
          <LogoutButton />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SideBar;
