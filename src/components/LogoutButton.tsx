import React from "react";
import { Icon, Link, Menu, MenuButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi"; // Replace this with the appropriate logout icon
import { supabase } from "src/services/client";

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      console.log("Logging out...");
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.error("Error signing out:", (error as Error).message);
      } else {
        console.log("Successfully signed out!");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error signing out:", (error as Error).message);
    }
  }

  return (
    <Menu placement="right">
      <Link
        onClick={handleLogout}
        backgroundColor="transparent"
        p={3}
        _hover={{
          "& svg": {
            color: "#0950e9",
          },
        }}
      >
        <MenuButton>
          <Icon as={BiLogOut} fontSize="2xl" color="#58555E" />
        </MenuButton>
      </Link>
    </Menu>
  );
};

export default LogoutButton;
