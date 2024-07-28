import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { Box, Button, List, ListItem, Text } from "@chakra-ui/react";

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <Box mt={6}>
      {" "}
      <List spacing={3}>
        {contacts.map((contact) => (
          <ListItem
            key={contact.id}
            p={3}
            borderWidth={1}
            borderRadius="md"
            boxShadow="md"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)" }}>
            <Box flex="1" display="flex" alignItems="center">
              <Text fontWeight="bold" mr={2}>
                {contact.name}:
              </Text>
              <Text>{contact.number}</Text>
            </Box>
            <Button onClick={() => handleDelete(contact.id)} colorScheme="red">
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ContactList;
