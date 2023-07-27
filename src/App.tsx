import { Grid, GridItem, Show } from "@chakra-ui/react";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import Overview from "./components/pages/Overview";
import Projects from "./components/pages/Projects";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [activePage, setActivePage] = useState<string>("Overview");

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
        <Header />
      </GridItem>
      <GridItem gridArea="sidebar">
        <Sidebar />
      </GridItem>
      <GridItem gridArea="main" backgroundColor="#f0f5fa">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </GridItem>
    </Grid>
  );
}

export default App;
