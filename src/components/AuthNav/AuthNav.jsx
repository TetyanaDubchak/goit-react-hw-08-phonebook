import { NavLink } from 'react-router-dom';
import { Link as ChakraLink } from "@chakra-ui/react";

export const AuthNav = () => {
  return (
    <div>
      <ChakraLink textDecoration='none'
        fontFamily='heading'
        fontWeight='semibold'
        color='secondary.50'
        mr='20px'
        bg='primary.100'
        p='8px'
        borderRadius='5px'
        _hover={{
          color: 'secondary.100',
          backgroundColor: 'primary.25',
          textDecoration: 'none'  
            }} as={NavLink} to="/register">
        Register
      </ChakraLink>
      <ChakraLink textDecoration='none'
        fontFamily='heading'
        fontWeight='semibold'
        color='secondary.50'
        bg='primary.100'
        p='8px'
        borderRadius='5px'
        _hover={{
          color: 'secondary.100',
          backgroundColor: 'primary.25',
          textDecoration: 'none'  
            }} as={NavLink} to="/login">
        Log In
      </ChakraLink>
    </div>
  );
};