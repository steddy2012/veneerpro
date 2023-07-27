import { Grid, GridItem } from '@chakra-ui/react';

import { Outlet } from 'react-router-dom';

import NavBar from 'src/components/NavBar';
import SideBar from 'src/components/SideBar';

function DashboardLayout() {
  return (
    <Grid
      templateColumns={{ base: '1fr', lg: '200px 1fr' }}
      templateRows={{ base: '200px 1fr', lg: 'auto 1fr' }} // Set the main section to take up auto for mobile and 1fr for large screens
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"sidebar nav" "sidebar main"`,
      }} // Place the sidebar before the nav in the large screen layout
      h='100vh'>
      <GridItem gridArea='nav'>
        {' '}
        {/* Add background color to see the navbar area */}
        <NavBar />
      </GridItem>
      <GridItem gridArea='sidebar'>
        {' '}
        {/* Add background color to see the sidebar area */}
        <SideBar />
      </GridItem>
      <GridItem gridArea='main' backgroundColor='#f0f5fa'>
        <Outlet />
      </GridItem>
    </Grid>
  );
}

export default DashboardLayout;
