import { useHistory } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import Swal from 'sweetalert2';
import { signUpSchema } from '../Schemas/schemas';
import { postSignUp } from '../Services/Api';
import errors from '../Services/Errors';
import { GoAlert } from 'react-icons/go';
import {
    ContainerForm,
    FormComponent,
    Title,
    Input,
    ModelButton,
    SimpleButton,
    DivMessage,
} from '../Styles/genericStyledComponents';

function SignUp() {
    const history = useHistory();
    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    function sendSignUp(values) {
        const {
            email,
            name,
            password,
            confirmPassword,
        } = values;
        
        if (password === confirmPassword) {
            postSignUp({ email, name, password})
            .then(() => {
                history.push('/');
            })
            .catch((error) => {
                errors(error);
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'As senhas não coindem!',
            })
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={signUpSchema}
            onSubmit={sendSignUp}
        >
            {({ errors, touched }) => (
                <ContainerForm>
                    <FormComponent >
                        <Title>MyWallet</Title>
                        <Input 
                            type='text' 
                            name='name'
                            placeholder='Nome' 
                        />
                        <ErrorMessage name='name' render={msg => ( 
                            <DivMessage>
                                <GoAlert color='#FFFF00' />
                                <span>{msg}</span>
                            </DivMessage>
                        )} />
                        <Input 
                            type='email' 
                            name='email'
                            placeholder='E-mail' 
                        />
                        <ErrorMessage name='email' render={msg => ( 
                            <DivMessage>
                                <GoAlert color='#FFFF00' />
                                <span>{msg}</span>
                            </DivMessage>
                        )} />
                        <Input 
                            type='password' 
                            name='password'
                            placeholder='Senha' 
                        />
                        <ErrorMessage name='password' render={msg => ( 
                            <DivMessage>
                                <GoAlert color='#FFFF00' />
                                <span>{msg}</span>
                            </DivMessage>
                        )} />
                        <Input 
                            type='password' 
                            name='confirmPassword'
                            placeholder='Confirme a senha'               
                        />
                        <ErrorMessage name='confirmPassword' render={msg => ( 
                            <DivMessage>
                                <GoAlert color='#FFFF00' />
                                <span>{msg}</span>
                            </DivMessage>
                        )} />
                        <ModelButton type='submit'>Cadastrar</ModelButton> 
                    </FormComponent>
                    <SimpleButton onClick={() => history.push('/')}>
                        Já tem uma conta? Entre agora!
                    </SimpleButton>
                </ContainerForm>
            )}
        </Formik>
    );
}

export default SignUp;
