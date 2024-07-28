import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/auth/operations";
import {
  Button,
  Input,
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp({ name, email, password }));
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
        Register
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl mb={4} isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </FormControl>
          <FormControl mb={4} isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </FormControl>
          <FormControl mb={4} isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </FormControl>
          <Button type="submit" colorScheme="teal" width="full" size="lg">
            Register
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default RegisterForm;
