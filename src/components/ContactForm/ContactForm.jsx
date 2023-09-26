import { Formik } from 'formik';
import { StyledForm, StyledError, Button,Label,Input } from "./ContactForm.styled";
import * as Yup from 'yup';
import { useDispatch,useSelector } from "react-redux";
import { addContact } from "../../redux/operations";
import { selectContacts } from "../../redux/selectors";

const phoneValidation = /^((\+[1-9]{1,4}[-]*)|(\([0-9]{2,3}\)[-]*)|([0-9]{2,4})[-]*)*?[0-9]{3,4}?[-]*[0-9]{3,4}?$/;

 const SignupSchema = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(16, 'Too Long!')
     .required('Required'),
   phone: Yup.string()
     .max(19, 'Too Long!')
     .matches(phoneValidation, 'Phone number is not valid, use format XX-XX-XX-XXX-XXX')
     .required('Required'),
 });

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
            name: '',
            phone: '',
            }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          const contactExists = contacts.some(contact => contact.name.toLowerCase() === values.name.toLowerCase());
            if (contactExists) {
              alert(`${values.name} is already in contacts`);
            } else {
              const name = values.name;
              const phone = values.phone
              dispatch(addContact({name, phone}));
            }
            actions.resetForm()
      }}
    >
      <StyledForm>
            <Label>Name
                    <Input name="name" type="text"/>
                    <StyledError name='name' component='div'/>
            </Label>
        
            <Label>Number
                    <Input name="phone" type="tel" />
                    <StyledError name='phone'component='div'/>    
            </Label>
        
        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>

    )

}