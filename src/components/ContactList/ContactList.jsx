import { Button, Text } from "./ContactList.styled";
import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/selectors";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations"; 

export const ContactList = () => {

    const filteredContacts = useSelector(selectVisibleContacts)
    const dispatch = useDispatch();

    return (
        <ul>
            {filteredContacts.map(obj => (
                
                <li key={obj.id}>
                    <Text>{obj.name}: {obj.phone}</Text>
                    <Button type="button" onClick = {() => dispatch(deleteContact(obj.id))} >Delete</Button>
                </li>
            ))

            }
        </ul>
    )
}

