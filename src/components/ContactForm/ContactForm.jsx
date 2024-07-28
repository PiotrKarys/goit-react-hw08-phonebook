import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Heading,
  FormErrorMessage,
} from "@chakra-ui/react";
import Notiflix from "notiflix";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const phonePattern = /^[0-9\s\-]+$/;
    if (!phonePattern.test(number)) {
      setError("Phone number can only contain digits, spaces, and hyphens.");
      Notiflix.Notify.failure(
        "Phone number can only contain digits, spaces, and hyphens.",
      );
      return;
    }

    setError("");
    dispatch(addContact({ name, number }))
      .then(() => {
        Notiflix.Notify.success("Contact added successfully!");
        setName("");
        setNumber("");
      })
      .catch(() => {
        Notiflix.Notify.failure("Failed to add contact.");
      });
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      p={6}
      borderWidth={1}
      borderRadius="md"
      boxShadow="lg"
      maxWidth="400px"
      width="100%"
      mx="auto"
      mt={6}
      bg="rgba(255, 255, 255, 0.9)">
      <FormControl isInvalid={!!error} mb={4}>
        <Heading as="h2" size="lg" mb={6} textAlign="center">
          Add a new contact
        </Heading>

        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
      </FormControl>
      <FormControl isInvalid={!!error} mb={4}>
        <FormLabel>Phone Number</FormLabel>
        <Input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Phone number"
          pattern="[0-9\s\-]*"
          required
        />
        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
      <Button type="submit" colorScheme="teal">
        Add Contact
      </Button>
    </Box>
  );
};

export default ContactForm;
