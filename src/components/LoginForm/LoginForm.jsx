// import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
// import { register } from 'redux/auth/operations';
import { StyledForm, StyledError, Button, Label, Input } from "./LoginForm.styled";


export const LoginForm = () => {
    // const dispatch = useDispatch();


    return (
        <Formik
            initialValues={{
            email: '',
            password: '',
            }}

            // validationSchema={SignupSchema}
            
        onSubmit={(values, actions) => {
        //   const contactExists = contacts.some(contact => contact.name.toLowerCase() === values.name.toLowerCase());
        //     if (contactExists) {
        //       alert(`${values.name} is already in contacts`);
        //     } else {
        //       const name = values.name;
        //       const phone = values.phone
        //       dispatch(addContact({name, phone}));
        //     }
        //     actions.resetForm()
      }}
    >
      <StyledForm>
            <Label>Email
                    <Input name="email" type="email" />
                    <StyledError name='phone'component='div'/>    
            </Label>
            <Label>Password
                    <Input name="password" type="password"/>
                    <StyledError name='name' component='div'/>
            </Label>
        
        <Button type="submit">Log In</Button>
      </StyledForm>
    </Formik>
    )

}