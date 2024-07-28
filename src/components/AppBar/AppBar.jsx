import React from "react";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import { useAuth } from "../../hooks/useAuth";
import { Flex, Box } from "@chakra-ui/react";

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex
      as="header"
      p={4}
      bgGradient="linear(to-r, teal.300, blue.500)"
      color="white"
      align="center"
      justify="space-between"
      position="fixed"
      width="100%"
      top="0"
      left="0"
      zIndex="1000">
      <Navigation />
      <Box>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>
    </Flex>
  );
};

export default AppBar;
