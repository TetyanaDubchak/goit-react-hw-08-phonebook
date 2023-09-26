import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { Wrap } from "./App.styled";
import { ContactList } from "./ContactList/ContactList";
import { selectError, selectIsLoading } from "redux/selectors";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Wrap>
      <ContactForm />
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList/>
    </Wrap>
  );
};
