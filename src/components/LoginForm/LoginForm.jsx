import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { logIn } from 'redux/auth/operations';
import { StyledForm, StyledError, Button, Label, Input } from "./LoginForm.styled";


export const LoginForm = () => {
    const dispatch = useDispatch();


    return (
        <Formik
            initialValues={{
            email: '',
            password: '',
            }}

            // validationSchema={SignupSchema}
            
        onSubmit={(values, actions) => {
              const email = values.email;
              const password = values.password
              dispatch(logIn({email, password}));
              actions.resetForm()
      }}
    >
      <StyledForm>
            <Label>Email
                    <Input name="email" type="email" />
                    <StyledError name='email'component='div'/>    
            </Label>
            <Label>Password
                    <Input name="password" type="password"/>
                    <StyledError name='password' component='div'/>
            </Label>
        
        <Button type="submit">Log In</Button>
      </StyledForm>
    </Formik>
    )

}