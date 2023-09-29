import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { Box, Button, Text } from "@chakra-ui/react";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <Box display='flex' alignItems='center'>
            <Text mr='60px' fontSize='18px' color='secondary.50' fontFamily='heading' fontWeight='light'>Welcome to PhoneBook, {user.name}</Text>
            <Button color='secondary.50'
            bg='primary.100'
            type="button"
            display='flex'
            mx='auto'
            _hover={{
                color: 'secondary.100',
                backgroundColor: 'primary.25',
            }}  onClick={() => dispatch(logOut())}>Logout</Button>
        </Box>
    )
}