import { Link as RouterLink } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";

interface MPRegisterButtonProps {
  href: string;
}

const MPRegisterButton: React.FC<MPRegisterButtonProps> = ({ href }) => {
  return (
    <RouterLink to={href}>
      <Flex
        p={3}
        borderRadius={8}
        color="white"
        background="linear-gradient(45deg, #4299E1, #00B7EB, #00D1DB)"
        w="100%"
        textAlign="center"
        textDecoration="none"
      >
        <Text fontFamily="sans-serif" as="b" display="flex">
          Start Today
        </Text>
      </Flex>
    </RouterLink>
  );
};

export default MPRegisterButton;
