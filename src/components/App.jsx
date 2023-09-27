// import { useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
// import { useDispatch,useSelector } from "react-redux";
// import { fetchContacts } from "redux/contacts/operations";
// import { ContactForm } from "./ContactForm/ContactForm";
// import { Filter } from "./Filter/Filter";
// import { Wrap } from "./App.styled";
// import { ContactList } from "./ContactList/ContactList";
// import { selectError, selectIsLoading } from "redux/contacts/selectors";
import { Layout } from "./Layout/Layout";
import Home from "../pages/HomePage/HomePage";
import Contacts from "pages/ContactsPage/ContactsPage";
import Register from "pages/RegisterPage/RegisterPage";
import Login from "pages/LoginPage/LoginPage";

export const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/register" element={<Register/> } />
        <Route path="/login" element={<Login/>} />
        <Route path="/contacts" element={<Contacts/>} />
      </Route>
    </Routes>


    // <Wrap>
    //   <ContactForm />
    //   <Filter />
    //   {isLoading && !error && <b>Request in progress...</b>}
    //   <ContactList/>
    // </Wrap>
  );
};
