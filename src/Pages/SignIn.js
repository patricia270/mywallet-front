import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { Formik, ErrorMessage } from 'formik';
import UserContext from '../Contexts/UserContext';
import { signInSchema } from '../Schemas/schemas';
import { postSignIn } from '../Services/Api';
import errors from '../Services/Errors';
import { DivMessage } from '../Styles/genericStyledComponents';
import { GoAlert } from 'react-icons/go';
import {
    ContainerForm,
    FormComponent,
    Title,
    Input,
    ModelButton,
    SimpleButton
} from '../Styles/genericStyledComponents';

function SignIn() {
    const { setUser } = useContext(UserContext);
    const history = useHistory();
    const initialValues = {
        email: '',
        password: '',
    };

    if (localStorage.getItem('MyWalletUserData')) {
        history.push('/registries');
    }

    function SendloginInfo(values) {
        postSignIn(values)
            .then((resp) => {
                setUser(resp.data);
                localStorage.setItem('MyWalletUserData', JSON.stringify(resp.data));
                history.push('/registries');
            })
            .catch((error) => { 
                errors(error);                
            })
    }

    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={signInSchema}
            onSubmit={SendloginInfo}
        >
            {() => (
                <ContainerForm isLogin>
                    <FormComponent>
                        <Title>MyWallet</Title>
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
                        <ModelButton type='submit'>Entrar</ModelButton>
                    </FormComponent>
                    <SimpleButton onClick={() => history.push('/sign-up')}>
                        Primeira vez? Cadastre-se!
                    </SimpleButton>
                </ContainerForm>
            )}
        </Formik>
    );
}

export default SignIn;
