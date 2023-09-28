import { useEffect, lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

// import { fetchContacts } from "redux/contacts/operations";
// import { ContactForm } from "./ContactForm/ContactForm";
// import { Filter } from "./Filter/Filter";
// import { Wrap } from "./App.styled";
// import { ContactList } from "./ContactList/ContactList";
// import { selectError, selectIsLoading } from "redux/contacts/selectors";
import { Layout } from "./Layout/Layout";

import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { refreshUser } from "../redux/auth/operations";
import { useAuth } from "../hooks/useAuth";


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

  return isRefreshing ? <b>Refreshing user...</b> : (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>} />
        <Route path="/register" element={<RegisterPage/> } />
        <Route path="/login" element={<RestrictedRoute component={<LoginPage/>} redirectTo="/contacts"/>} />
        <Route path="/contacts" element={<PrivateRoute component={<ContactsPage/> } redirectTo="/login"/>} />
      </Route>
    </Routes>
  );
};
