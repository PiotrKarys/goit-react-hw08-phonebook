import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/contacts/slice";
import { useAuth } from "../../hooks/useAuth";
import { Box, Input, Text } from "@chakra-ui/react";

const Filter = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  const filter = useSelector((state) => state.contacts.filter);

  if (!isLoggedIn) {
    return null;
  }

  const changeFilter = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <Box
      mt={6}
      p={4}
      borderWidth={1}
      borderRadius="md"
      boxShadow="lg"
      maxWidth="400px"
      width="100%"
      mx="auto"
      bg="rgba(255, 255, 255, 0.9)">
      <Text mb={2} fontSize="lg" fontWeight="semibold">
        Find contacts by name
      </Text>
      <Input
        type="text"
        value={filter}
        onChange={changeFilter}
        placeholder="Search by name"
        variant="outline"
      />
    </Box>
  );
};

export default Filter;
