import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  VStack,
} from "@chakra-ui/react";
import Notiflix from "notiflix";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const resultAction = await dispatch(logIn({ email, password }));
      if (logIn.fulfilled.match(resultAction)) {
        Notiflix.Notify.success("Logged in successfully!");
        navigate("/contacts");
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      Notiflix.Notify.failure("Login failed. Please check your credentials.");
    }
  };

  return (
    <Box
      p={6}
      borderWidth={1}
      borderRadius="md"
      boxShadow="lg"
      maxWidth="400px"
      width="100%"
      mx="auto"
      mt={100}
      bg="rgba(255, 255, 255, 0.9)">
      <Heading as="h2" size="lg" mb={6} textAlign="center">
        Sign In
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isInvalid={!!error} mb={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <FormErrorMessage>{error}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!error} mb={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <FormErrorMessage>{error}</FormErrorMessage>
          </FormControl>
          <Button type="submit" colorScheme="teal" width="full" size="lg">
            Log In
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default LoginForm;
