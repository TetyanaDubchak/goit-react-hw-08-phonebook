import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from "redux/contacts/operations";
import { selectIsLoading } from "redux/contacts/selectors";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { Box, Text } from "@chakra-ui/react";

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <Box p='40px'>
            <Text fontFamily='heading' color='primary.100' fontSize='30px' textAlign='center' mb='30px'>PhoneBook</Text>
            <ContactForm />
            <Filter />
            <div>{isLoading && 'Request in progress...' }</div>
            <ContactList/>
        </Box>
    )
}