import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";
import { Box, Heading } from "@chakra-ui/react";

const Contacts = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      p={6}
      display="flex"
      flexDirection="column"
      alignItems="center"
      bg="linear-gradient(to-r, teal.300, blue.500)"
      minHeight="100vh">
      <Heading mb={4} color="white">
        Contacts Page
      </Heading>
      <ContactForm />
      <Filter />
      <Box width="full" maxWidth="600px" mx={4} mt={4}>
        <ContactList contacts={filteredContacts} />
      </Box>
    </Box>
  );
};

export default Contacts;
