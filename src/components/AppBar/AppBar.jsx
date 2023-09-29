import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "../../hooks/useAuth";
import { Flex, Spacer } from "@chakra-ui/react";

export const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Flex as='header' d='flex' h='80px' p='20px' bg='primary.50'>
            <Navigation />
            <Spacer/>
            {isLoggedIn ? <UserMenu/> : <AuthNav/>} 
        </Flex>
    )
}