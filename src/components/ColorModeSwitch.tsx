//not sure if i want this in the application. no real purpoose. Keep file but remove from navbar in the mean time.

import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"; 

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="blue"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
