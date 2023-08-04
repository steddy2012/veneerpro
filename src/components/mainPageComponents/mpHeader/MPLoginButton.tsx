import { Link as RouterLink } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";

interface MPLoginButtonProps {
  href: string;
}

const MPLoginButton: React.FC<MPLoginButtonProps> = ({ href }) => {
  return (
    <RouterLink to={href}>
      <Flex
        p={3}
        borderRadius={8}
        border="1px solid #5E6371"
        color="#58555E"
        backgroundColor="transparent"
        w="100%"
        textAlign="center"
        textDecoration="none"
      >
        <Text fontFamily="sans-serif" as="b" display="flex">
          Log In
        </Text>
      </Flex>
    </RouterLink>
  );
};

export default MPLoginButton;
