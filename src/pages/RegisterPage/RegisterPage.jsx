import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { Box, Text } from "@chakra-ui/react";

export default function Register() {
    return (
        <Box p='30px'>
            <Text fontFamily='heading' color='primary.100' fontSize='22px' textAlign='center' mb='30px'>Please, register if you do not have an account yet</Text>
            <RegisterForm/>
        </Box>
    )
}