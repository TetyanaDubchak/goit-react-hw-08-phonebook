import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";

export default function Contacts() {
    return (

        <div>
            <h2>Contacts</h2>
            <ContactForm />
            <Filter />
            <ContactList/>
        </div>
    )
}