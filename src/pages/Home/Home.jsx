import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const getGreetingMessage = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const greetingMessage = getGreetingMessage();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-r, teal.300, blue.500)"
      position="relative"
      overflow="hidden"
      mt={250}>
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        zIndex="-1">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 30 }}
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.2)",
            position: "absolute",
            top: "-100px",
            left: "-100px",
          }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 60 }}
          style={{
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.3)",
            position: "absolute",
            bottom: "-150px",
            right: "-150px",
          }}
        />
      </Box>
      <Box textAlign="center" color="white" zIndex="1" mt={4}>
        <Heading
          mb={2}
          fontSize={useBreakpointValue({ base: "2xl", md: "4xl" })}
          sx={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
          {greetingMessage}, {user ? user.name : "Guest"}!
        </Heading>
        <Text
          fontSize="xl"
          mb={4}
          sx={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)" }}>
          Welcome to <strong>THE PHONEBOOK</strong>
        </Text>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={() => navigate("/contacts")}>
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
