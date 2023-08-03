import React from "react";
import { Icon, Link, Menu, MenuButton } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi"; // Replace this with the appropriate logout icon

const LogoutButton: React.FC = ({}) => {
  const navigate = useNavigate();

  function handleLogout() {
    console.log("Logging out and removing token...");
    sessionStorage.removeItem("token");
    setTimeout(() => {
      console.log("Navigating to login page...");
      navigate("/login");
    }, 500);
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
