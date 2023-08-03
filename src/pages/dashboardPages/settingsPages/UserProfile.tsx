import { Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import HeaderSettings from "src/components/headers/HeaderSettings";
import CPForm from "src/components/settingsPagesComponents/CPForm";
import UPForm from "src/components/settingsPagesComponents/UPForm";

const UserProfile = () => {
  return (
    <Grid
      h="100%"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(4, 1fr)"
      gap={4}
    >
      <GridItem
        marginLeft={8}
        marginRight={1}
        marginTop={8}
        marginBottom={8}
        p={4}
        colSpan={2}
        bg="white"
        borderRadius="2xl"
        boxShadow="lg"
      >
        <Heading fontFamily="sans-serif" textColor="#58555E" mb={4}>
          User Profile
        </Heading>
        <UPForm />
      </GridItem>
      <GridItem
        marginLeft={1}
        marginRight={8}
        marginTop={8}
        marginBottom={8}
        p={4}
        colSpan={2}
        bg="white"
        borderRadius="2xl"
        boxShadow="lg"
      >
        <Heading fontFamily="sans-serif" textColor="#58555E" mb={4}>
          Change Password
        </Heading>
        <CPForm />
      </GridItem>
    </Grid>
  );
};

export default UserProfile;
