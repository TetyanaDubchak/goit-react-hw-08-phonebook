import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch,useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
import { Button, Input, FormControl, FormLabel, FormErrorMessage, Text } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const phoneValidation = /^((\+[1-9]{1,4}[-]*)|(\([0-9]{2,3}\)[-]*)|([0-9]{2,4})[-]*)*?[0-9]{3,4}?[-]*[0-9]{3,4}?$/;

 const SignupSchema = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(16, 'Too Long!')
     .required('Required'),
   number: Yup.string()
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
            number: '',
            }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          const contactExists = contacts.some(contact => contact.name.toLowerCase() === values.name.toLowerCase());
            if (contactExists) {
              alert(`${values.name} is already in your PhoneBook`);
            } else {
              const name = values.name;
              const number = values.number;
              dispatch(addContact({name, number}));
            }
            actions.resetForm()
      }}
      >
        {(formikProps) => (
          <>
            <Text fontFamily='heading' color='primary.100' fontSize='20px' textAlign='center' mb='30px'>Add a new contact</Text>
          <form onSubmit={formikProps.handleSubmit}>
            <FormControl mb='40px' id="name" isRequired>
              <FormLabel fontFamily='mono' color='secondary.100' fontSize='18px'>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={formikProps.values.name}
                onChange={formikProps.handleChange}
                _focus={{
                    color: 'secondary.100',
                    borderColor: 'primary.100',
              }}
              />
              <FormErrorMessage>{formikProps.errors.name}</FormErrorMessage>
          </FormControl>
          <FormControl mb='40px' id="number" isRequired>
            <FormLabel fontFamily='mono' color='secondary.100' fontSize='18px'>Number</FormLabel>
            <Input
              type="tel"
              name="number"
              value={formikProps.values.number}
              onChange={formikProps.handleChange}
              _focus={{
                    color: 'secondary.100',
                    borderColor: 'primary.100',
              }}
            />
            <FormErrorMessage>{formikProps.errors.number}</FormErrorMessage>
          </FormControl>
          <Button color='secondary.50'
            bg='primary.100'
            type="submit"
            display='flex'
            mx='auto'
            _hover={{
                color: 'secondary.50',
                backgroundColor: 'primary.50',
            }}><AddIcon mr='10px'/> Add contact</Button>
        </form>
          </>
        
        )}

    </Formik>
    )
}