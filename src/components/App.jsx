import { useEffect, lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { Layout } from "./Layout/Layout";

import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { refreshUser } from "../redux/auth/operations";
import { useAuth } from "../hooks/useAuth";
import { CSSReset, Box, Spinner } from "@chakra-ui/react";


const HomePage = lazy(() => import('../pages/HomePage/HomePage'))
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'))
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'))
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'))

export const App = () => {
  const dispatch = useDispatch();
  const {isRefreshing} = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return  (
    <Box maxW='800px'minH='1100px' ml='auto' mr='auto' mt='40px' bg='primary.25'>
      <CSSReset />
      {isRefreshing ? (<Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='primary.100'
              display='flex'
              mr='auto'
              ml='auto'
              mt='400px'
              size='xl'
            />) : (
      <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>} />
        <Route path="/register" element={<RegisterPage/> } />
        <Route path="/login" element={<RestrictedRoute component={<LoginPage/>} redirectTo="/contacts"/>} />
        <Route path="/contacts" element={<PrivateRoute component={<ContactsPage/> } redirectTo="/login"/>} />
      </Route>
    </Routes>    
      ) }  

    </Box>

  );
};
