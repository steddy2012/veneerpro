import {
  HStack,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

const Settings = () => {
  return (
    <HStack justifyContent="space-between" padding="15px">
      <Tabs position="relative" variant="unstyled">
        <TabList>
          <Tab>Incompleted </Tab>
          <Tab>Completed</Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="blue.500"
          borderRadius="1px"
        />
        <TabPanels background={"grey"}>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </HStack>
  );
};

export default Settings;
