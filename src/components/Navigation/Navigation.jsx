import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Link } from "@chakra-ui/react";
import { useAuth } from "../../hooks/useAuth";

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box>
      <Link
        as={NavLink}
        to="/"
        mx={2}
        p={2}
        borderRadius="md"
        fontWeight="bold"
        _hover={{
          textDecoration: "none",
          bg: "teal.400",
          color: "white",
        }}
        _activeLink={{
          textDecoration: "none",
          bg: "teal.500",
          color: "white",
        }}>
        Home
      </Link>
      {isLoggedIn && (
        <Link
          as={NavLink}
          to="/contacts"
          mx={2}
          p={2}
          borderRadius="md"
          fontWeight="bold"
          _hover={{
            textDecoration: "none",
            bg: "teal.400",
            color: "white",
          }}
          _activeLink={{
            textDecoration: "none",
            bg: "teal.500",
            color: "white",
          }}>
          Contacts
        </Link>
      )}
    </Box>
  );
};

export default Navigation;
