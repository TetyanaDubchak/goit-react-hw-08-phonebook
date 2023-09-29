import { NavLink } from 'react-router-dom';
import { useAuth } from "../../hooks/useAuth";
import { Link as ChakraLink } from "@chakra-ui/react";

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <nav>
            <ChakraLink fontSize='20px'
                mr='20px'
                fontFamily='heading'
                fontWeight='bold'
                color='secondary.50'
                _hover={{
                color: 'primary.100',
                textDecoration: 'none'
            }} as={NavLink} to="/">
                Home
            </ChakraLink>
            {isLoggedIn && (
                <ChakraLink fontSize='20px'
                    fontFamily='heading'
                    fontWeight='bold'
                    color='secondary.50'
                    _hover={{
                        color: 'primary.100',
                        textDecoration: 'none'
            }} as={NavLink} to='/contacts'>
                    Contacts
                </ChakraLink>
            )}
        </nav>
    )
}