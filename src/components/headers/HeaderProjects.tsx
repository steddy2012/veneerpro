import { HStack, Spacer } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import HeaderItem from "../headers/HeaderItem";

const HeaderProjects = () => {
  const { pathname } = useLocation(); // this line uses the pathname in the url to highlight the sidebar tabs: /dashboard/overview. if it matches it highlights

  return (
    <HStack justifyContent="space-between" padding="15px">
      <HStack
        spacing="20px"
        whiteSpace="nowrap"
        flexShrink={0}
        alignItems="center"
        marginTop={-7}
      >
        <HeaderItem
          title="Incomplete"
          active={pathname === "/dashboard/projects/incomplete"}
          href="/dashboard/projects/incomplete"
        />
        <HeaderItem
          title="Completed"
          active={pathname === "/dashboard/projects/completed"}
          href="/dashboard/projects/completed"
        />
      </HStack>
      <Spacer />
    </HStack>
  );
};

export default HeaderProjects;
