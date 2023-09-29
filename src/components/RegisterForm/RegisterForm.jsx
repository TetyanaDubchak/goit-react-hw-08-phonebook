import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { register } from 'redux/auth/operations';


import { Button, Input, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';


export const RegisterForm = () => {
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
            name: '',
            email: '',
            password: '',
            }}
            
        onSubmit={(values, actions) => {
            const name = values.name;
            const email = values.email;
            const password = values.password;
           
            dispatch(register({name, email, password}));

            actions.resetForm()
      }}
        >
            {(formikProps) => (
                <form onSubmit={formikProps.handleSubmit}>
                    <FormControl mb='20px' id='name' isRequired>
                        <FormLabel fontFamily='mono' color='secondary.100' fontSize='18px'>Username</FormLabel>
                        <Input
                            name="name"
                            type="text"
                            value={formikProps.values.name}
                            onChange={formikProps.handleChange}
                          _focus={{
                                color: 'secondary.100',
                                borderColor: 'primary.100',
                            }}/>
                        <FormErrorMessage>{formikProps.errors.name}</FormErrorMessage>   
                    </FormControl>
                    <FormControl mb='20px' id="email" isRequired>
                        <FormLabel fontFamily='mono' color='secondary.100' fontSize='18px'>Email</FormLabel>
                        <Input
                        type="email"
                        name="email"
                        value={formikProps.values.email}
                        onChange={formikProps.handleChange}
                        _focus={{
                                color: 'secondary.100',
                                borderColor: 'primary.100',
                            }}
                        />
                        <FormErrorMessage>{formikProps.errors.email}</FormErrorMessage>
                    </FormControl>
                    <FormControl mb='40px' id="password" isRequired>
                        <FormLabel fontFamily='mono' color='secondary.100' fontSize='18px'>Password</FormLabel>
                        <Input
                        type="password"
                        name="password"
                        value={formikProps.values.password}
                        onChange={formikProps.handleChange}
                        _focus={{
                                color: 'secondary.100',
                                borderColor: 'primary.100',
                            }}
                        />
                        <FormErrorMessage>{formikProps.errors.password}</FormErrorMessage>
                    </FormControl>
        
                    <Button color='secondary.50'
                        bg='primary.100'
                        type="submit"
                        display='flex'
                        mx='auto'
                        _hover={{
                                color: 'secondary.50',
                                backgroundColor: 'primary.50',
                            }}>Register</Button>
      </form>
            )}
      
    </Formik>
    )
}