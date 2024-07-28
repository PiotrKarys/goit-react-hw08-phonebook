import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Link } from "@chakra-ui/react";

const AuthNav = () => (
  <Box>
    <Link
      as={NavLink}
      to="/register"
      mx={2}
      p={2}
      borderRadius="md"
      fontWeight="bold"
      _hover={{
        textDecoration: "none",
        bg: "teal.200",
        color: "teal.800",
      }}
      _activeLink={{
        textDecoration: "none",
        bg: "teal.300",
        color: "white",
      }}>
      Register
    </Link>
    <Link
      as={NavLink}
      to="/login"
      mx={2}
      p={2}
      borderRadius="md"
      fontWeight="bold"
      _hover={{
        textDecoration: "none",
        bg: "teal.200",
        color: "teal.800",
      }}
      _activeLink={{
        textDecoration: "none",
        bg: "teal.300",
        color: "white",
      }}>
      Login
    </Link>
  </Box>
);

export default AuthNav;
