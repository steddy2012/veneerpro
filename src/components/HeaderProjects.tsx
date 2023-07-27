import React, { useState } from "react";
import { HStack, Text, Link, Spacer } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import ColorModeSwitch from "./ColorModeSwitch";

const HeaderProjects = () => {
  const [activeLink, setActiveLink] = useState<string>("Incomplete");

  const linkStyles = {
    backgroundColor: activeLink === "Incomplete" ? "#0950e9" : "transparent",
    textColor: activeLink === "Incomplete" ? "white" : "#58555E",
    fontSize: "l",
    fontWeight: activeLink === "Incomplete" ? "bold" : "normal",
    p: 3,
    borderRadius: 8,
    _hover: {
      textColor: activeLink === "Incomplete" ? "white" : "#0950e9",
      backgroundColor: activeLink === "Incomplete" ? "#0950e9" : "#f0f5fa",
    },
    _active: {
      backgroundColor: "#0950e9",
    },
  };

  return (
    <HStack justifyContent="space-between" padding="15px">
      <HStack alignItems="center">
        <Text paddingLeft="5px" as="b" fontSize="24px">
          Projects
        </Text>
        <Link
          {...linkStyles}
          onClick={() => setActiveLink("Incomplete")}
          mr={2}
        >
          <HStack>
            <RiMenuLine
              fontSize="xl"
              color={activeLink === "Incomplete" ? "white" : "#58555E"}
            />
            <Text fontFamily="sans-serif" as="b" ml={5} display="flex">
              Incomplete
            </Text>
          </HStack>
        </Link>
        <Link {...linkStyles} onClick={() => setActiveLink("Completed")}>
          <HStack>
            <RiMenuLine
              fontSize="xl"
              color={activeLink === "Completed" ? "white" : "#58555E"}
            />
            <Text fontFamily="sans-serif" as="b" ml={5} display="flex">
              Completed
            </Text>
          </HStack>
        </Link>
      </HStack>
      <Spacer />
      <ColorModeSwitch />
    </HStack>
  );
};

export default HeaderProjects;
