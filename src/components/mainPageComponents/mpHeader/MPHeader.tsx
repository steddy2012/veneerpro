import { HStack, Spacer, Image, Box } from "@chakra-ui/react";

import MPHeaderItem from "./MPHeaderItem";
import { Link, Link as RouterLink, useLocation } from "react-router-dom";
import THeaderLogo from "src/assets/THeaderLogo.webp";
import TLogoRectangle from "src/assets/TLogoRectangle.webp";
import MPLoginButton from "./MPLoginButton";
import MPRegisterButton from "./MPRegisterButton";

const MPHeader = () => {
  const { pathname } = useLocation();

  return (
    <HStack
      justifyContent="space-between"
      padding="15px"
      backgroundColor="white"
      pl={20}
      pr={20}
      mt={-1}
    >
      {/* Left section with logo */}
      <Box flex="1">
        <Link to="/">
          <Image src={THeaderLogo} alt="VeneerPro logo" />
        </Link>
      </Box>
      {/* Middle section with MPHeaderItems */}
      <Box flex="2" display="flex" alignItems="center" justifyContent="center">
        <HStack spacing="20px" whiteSpace="nowrap" flexShrink={0} mt={-6}>
          <MPHeaderItem
            title="Products"
            active={pathname === "/products"}
            href="/products"
          />
          <MPHeaderItem
            title="Pricing"
            active={pathname === "/pricing"}
            href="/pricing"
          />
          <MPHeaderItem
            title="Help"
            active={pathname === "/help"}
            href="/help"
          />
          <MPHeaderItem
            title="Grow"
            active={pathname === "/grow"}
            href="/grow"
          />
        </HStack>
      </Box>
      {/* Right section with buttons for Login and Register */}
      <Box flex="1" display="flex" justifyContent="flex-end">
        <HStack spacing="10px">
          <MPLoginButton href="/login" />
          <MPRegisterButton href="/signup" />
        </HStack>
      </Box>
    </HStack>
  );
};

export default MPHeader;
