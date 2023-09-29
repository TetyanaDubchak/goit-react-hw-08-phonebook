import { LoginForm } from "components/LoginForm/LoginForm";
import { Box, Text } from "@chakra-ui/react";

export default function Login() {
    return (
        <Box p='30px'>
            <Text fontFamily='heading' color='primary.100' fontSize='22px' textAlign='center' mb='30px'>Please, login to view contacts</Text>
            <LoginForm/>
        </Box>
    )
}