import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContacts } from "redux/contacts/operations";
import { selectError, selectIsLoading } from "redux/contacts/selectors";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div>
            <Helmet>
                <title>Contacts</title>
            </Helmet>
            <ContactForm />
            <Filter />
            <div>{isLoading && 'Request in progress...' }</div>
            <ContactList/>
        </div>
    )
}