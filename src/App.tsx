import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Sidebar from "./components/SideBar";

function App() {
  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      templateRows={{ base: "200px 1fr", lg: "auto 1fr" }} // Set the main section to take up auto for mobile and 1fr for large screens
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"sidebar nav" "sidebar main"`,
      }} // Place the sidebar before the nav in the large screen layout
      h="100vh"
    >
      <GridItem gridArea="nav">
        {" "}
        {/* Add background color to see the navbar area */}
        <NavBar />
      </GridItem>
      <GridItem gridArea="sidebar">
        {" "}
        {/* Add background color to see the sidebar area */}
        <Sidebar />
      </GridItem>
      <GridItem gridArea="main" backgroundColor="#f0f5fa">
        Main Content Area
      </GridItem>
    </Grid>
  );
}

export default App;
