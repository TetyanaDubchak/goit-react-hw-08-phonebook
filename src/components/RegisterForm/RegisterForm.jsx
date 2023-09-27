import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { register } from 'redux/auth/operations';
import { StyledForm, StyledError, Button, Label, Input } from "./RegisterForm.styled";


export const RegisterForm = () => {
    const dispatch = useDispatch();


    return (
        <Formik
            initialValues={{
            name: '',
            email: '',
            password: '',
            }}

            // validationSchema={SignupSchema}
            
        onSubmit={(values, actions) => {
        //   const contactExists = contacts.some(contact => contact.name.toLowerCase() === values.name.toLowerCase());
        //     if (contactExists) {
        //       alert(`${values.name} is already in contacts`);
        //     } else {
            const name = values.name;
            const email = values.email;
            const password = values.password;
            console.log('form',values);
            dispatch(register({name, email, password}));
        //     }
            // actions.resetForm()
      }}
    >
      <StyledForm>
            <Label>Username
                    <Input name="name" type="text"/>
                    <StyledError name='name' component='div'/>
            </Label>
        
            <Label>Email
                    <Input name="email" type="email" />
                    <StyledError name='phone'component='div'/>    
            </Label>
            <Label>Password
                    <Input name="password" type="password"/>
                    <StyledError name='name' component='div'/>
            </Label>
        
        <Button type="submit">Register</Button>
      </StyledForm>
    </Formik>
    )

}