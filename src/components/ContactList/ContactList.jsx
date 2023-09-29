
import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/contacts/selectors";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations"; 
import {
  List,
  ListItem,
  Text,
  Button,
  Container
} from '@chakra-ui/react'
import { DeleteIcon,PhoneIcon } from '@chakra-ui/icons'

export const ContactList = () => {

    const filteredContacts = useSelector(selectVisibleContacts)
    const dispatch = useDispatch();

    return (
        <List spacing={3}>
            {filteredContacts.map(obj => (
                <ListItem display='flex' justifyContent='space-between' mb='20px' key={obj.id}>
                    <Container display='flex' alignItems='center'>
                        <PhoneIcon mr='12px'/>
                        <Text fontFamily='mono' fontSize='20px' fontWeight='bold'>{obj.name}:</Text>
                        <Text fontFamily='mono'>{obj.number}</Text>
                    </Container>
                        
                    <Button type="button" color='secondary.50'
                        bg='primary.100'
                        _hover={{
                            color: 'secondary.50',
                            backgroundColor: 'primary.50',
                        }} onClick = {() => dispatch(deleteContact(obj.id))} ><DeleteIcon mr='10px'/> Delete</Button>
                </ListItem>
            ))
            }
        </List>
    )
}

