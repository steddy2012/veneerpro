import { Divider, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";
import CDForm from "src/components/settingsPagesComponents/CDForm";
import TechnicalsForm from "src/components/settingsPagesComponents/TechnicalsForm";
import YBForm from "src/components/settingsPagesComponents/YBForm";

const CompanyProfile = () => {
  return (
    <Grid
      h="100%"
      templateRows="repeat(1, 1fr)"
      templateColumns="repeat(1, 1fr)"
      gap={4}
    >
      <GridItem
        marginLeft={8}
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
          Company Details
        </Heading>
        <Text fontFamily="sans-serif" textColor="#58555E" fontSize="1em" mb={4}>
          This information will be used on any proposals that you create.
        </Text>
        <CDForm />
        <Divider borderColor="#19181B" marginBottom={4} />

        <Heading fontFamily="sans-serif" textColor="#58555E" mb={4}>
          Your Brand
        </Heading>
        <Text fontFamily="sans-serif" textColor="#58555E" fontSize="1em" mb={4}>
          Customize your company profile and the look of your reports by
          uploading your logo
        </Text>
        <Divider borderColor="#19181B" marginBottom={4} />

        <Heading fontFamily="sans-serif" textColor="#58555E" mb={4}>
          Technicals
        </Heading>
        <Text fontFamily="sans-serif" textColor="#58555E" fontSize="1em" mb={4}>
          Configure your preferences
        </Text>
        <TechnicalsForm />
      </GridItem>
    </Grid>
  );
};

export default CompanyProfile;
