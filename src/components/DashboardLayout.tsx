import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";

import SideBar from "src/components/SideBar";
import HeaderProjects from "./headers/HeaderProjects";
import HeaderSettings from "./headers/HeaderSettings";
import Header from "./headers/Header";

function DashboardLayout() {
  const { pathname } = useLocation();

  // Check if the pathname matches the routes to determine active headers
  const isProjectsActive =
    pathname === "/dashboard/projects/incomplete" ||
    pathname === "/dashboard/projects/completed";
  const isSettingsActive =
    pathname === "/dashboard/settings/userProfile" ||
    pathname === "/dashboard/settings/companyProfile" ||
    pathname === "/dashboard/settings/team" ||
    pathname === "/dashboard/settings/subscriptions" ||
    pathname === "/dashboard/settings/purchases";

  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      templateRows={{ base: "200px 1fr", lg: "auto 1fr" }}
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"sidebar nav" "sidebar main"`,
      }}
      h="100vh"
    >
      <GridItem gridArea="nav">
        {isProjectsActive && <HeaderProjects />}
        {isSettingsActive && <HeaderSettings />}
        {!isProjectsActive && !isSettingsActive && <Header />}
      </GridItem>
      <GridItem gridArea="sidebar">
        <SideBar />
      </GridItem>
      <GridItem
        gridArea="main"
        backgroundColor="#f0f5fa"
        overflowY="auto" // Set main section as scrollable
      >
        <Outlet />
      </GridItem>
    </Grid>
  );
}

export default DashboardLayout;
