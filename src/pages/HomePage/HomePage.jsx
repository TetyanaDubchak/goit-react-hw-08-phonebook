import { Text, Box, UnorderedList, ListItem } from "@chakra-ui/react";

export default function Home() {
    return (
        <Box p='30px'>
            <Text fontFamily='heading' color='primary.100' fontSize='26px' textAlign='center' mb='30px'>Welcome to the Phone Book</Text>
            <Text textIndent='25px' fontFamily='heading' color='primary.100' fontSize='20px' textAlign='justify' mb='30px'> Our Phone Book service provides a convenient and easy way to manage your contacts. We help you save, organize, and find all your contacts using a simple and efficient interface. Our key features include:</Text>
            <UnorderedList>
                <ListItem  fontFamily='heading' color='primary.100' fontSize='20px' textAlign='justify' mb='30px'>
                    Adding Contacts: Easily add new contacts to your list in just a few steps. You can provide names, phone numbers.
                </ListItem>
                <ListItem fontFamily='heading' color='primary.100' fontSize='20px' textAlign='justify' mb='30px'>
                    Search and Filtering: Quickly locate the contacts you need by name. We offer powerful filters for advanced searching.
                </ListItem>
                <ListItem fontFamily='heading' color='primary.100' fontSize='20px' textAlign='justify' mb='30px'>
                    Deleting: Delete unnecessary contacts and keep only relevant ones.
                </ListItem>
            </UnorderedList>
            <Text textIndent='25px' fontFamily='heading' color='primary.100' fontSize='20px' textAlign='justify' mb='30px'>Explore the convenience of our Phone Book and simplify your contact management today. </Text>
        </Box>
    )
}