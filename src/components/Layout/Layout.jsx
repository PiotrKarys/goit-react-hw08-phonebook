import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <AppBar />
      <Box as="main" p={4} minHeight="calc(100vh - 64px)" bg="inherit">
        {" "}
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
