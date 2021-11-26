import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { inputAndOutputSchema } from '../Schemas/schemas';
import UserContext from '../Contexts/UserContext';
import { postNewInput } from '../Services/Api';
import errors from '../Services/Errors';
import { GoAlert } from 'react-icons/go';
import { 
    HeaderDiv,
    FormComponent,
    SessionTitle,
    Input,
    ModelButton,
    ContainerNewRegister,
    DivMessage,
} from '../Styles/genericStyledComponents';

function NewInput() {
    const { user } = useContext(UserContext);
    const history = useHistory();
    const initialValues = {
        value: '',
        description: '',
    }
    
    if (!localStorage.getItem('MyWalletUserData')) {
        history.push('/');
    }

    function sendInput(values) {
        const config = {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
        };
    
        postNewInput(values, config)
            .then(() => {
                history.push('/registries');
            })
            .catch((error) => {                
                errors(error);              
            })
    }

    return(
        <>
            <HeaderDiv>
                <SessionTitle>Nova entrada</SessionTitle>
            </HeaderDiv>
            <ContainerNewRegister>
                <Formik
                    initialValues={initialValues}
                    validationSchema={inputAndOutputSchema}
                    onSubmit={sendInput}
                >
                    {() => (
                        <FormComponent>
                            <Input 
                                type='text' 
                                name='value'
                                placeholder='Valor'
                            />
                            <ErrorMessage name='value' render={msg => ( 
                                <DivMessage>
                                    <GoAlert color='#FFFF00' />
                                    <span>{msg}</span>
                                </DivMessage>
                            )} />
                            <Input 
                                type='text' 
                                name='description'
                                placeholder='Descrição'
                            />
                            <ErrorMessage name='description' render={msg => ( 
                                <DivMessage>
                                    <GoAlert color='#FFFF00' />
                                    <span>{msg}</span>
                                </DivMessage>
                            )} />
                            <ModelButton type='submit'>Salvar entrada</ModelButton>
                        </FormComponent>
                    )}
                </Formik>
            </ContainerNewRegister>
        </>
    );
}

export default NewInput;