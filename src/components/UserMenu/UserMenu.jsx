import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { useAuth } from "../../hooks/useAuth";
import { Button, Text, Flex } from "@chakra-ui/react";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      p={2}
      mr={5}
      bg="gray.800"
      borderRadius="md">
      <Text mr={4} color="white">
        Welcome, <strong>{user ? user.name : "Guest"}</strong>
      </Text>
      {user && user.name && (
        <Button onClick={() => dispatch(logOut())} colorScheme="red">
          Logout
        </Button>
      )}
    </Flex>
  );
};

export default UserMenu;
