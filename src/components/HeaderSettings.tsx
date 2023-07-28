import { HStack, Spacer } from "@chakra-ui/react";

import HeaderItem from "./HeaderItem";
import { useLocation } from "react-router-dom";

const HeaderSettings = () => {
  const { pathname } = useLocation();

  return (
    <HStack justifyContent="space-between" padding="15px">
      <HStack
        spacing="20px"
        whiteSpace="nowrap"
        flexShrink={0}
        alignItems="center"
        marginTop={-7}
      >
        <HeaderItem
          title="User Profile"
          active={pathname === "/dashboard/settings/userProfile"}
          href="/dashboard/settings/userProfile"
        />
        <HeaderItem
          title="Company Profile"
          active={pathname === "/dashboard/settings/companyProfile"}
          href="/dashboard/settings/companyProfile"
        />
        <HeaderItem
          title="Team"
          active={pathname === "/dashboard/settings/team"}
          href="/dashboard/settings/team"
        />
        <HeaderItem
          title="Subscriptions"
          active={pathname === "/dashboard/settings/subscriptions"}
          href="/dashboard/settings/subscriptions"
        />
        <HeaderItem
          title="Purchases"
          active={pathname === "/dashboard/settings/purchases"}
          href="/dashboard/settings/purchases"
        />
      </HStack>
      <Spacer />
    </HStack>
  );
};

export default HeaderSettings;
