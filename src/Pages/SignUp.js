import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { postSignUp } from '../Services/Api';
import Swal from 'sweetalert2'
import {
    ContainerForm,
    Form,
    Title,
    Input,
    ModelButton,
    SimpleButton
} from '../Styles/StyledComponents';

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const history = useHistory();

    function sendSignUp(event) {
        event.preventDefault();
        const body = {
            email,
            name,
            password,
        };
        if (password === confirmPassword) {
            postSignUp(body)
            .then(() => {
                history.push("/");
            })
            .catch((error) => {
                console.log(error)
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
        <ContainerForm isLogin={false}>
            <Form onSubmit={sendSignUp}>
                <Title>MyWallet</Title>
                <Input 
                    type="text" 
                    placeholder="Nome" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <Input 
                    type="email" 
                    placeholder="E-mail" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Input 
                    type="password" 
                    placeholder="Senha" 
                    value={password}
                    minLength="8"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Input 
                    type="password" 
                    placeholder="Confirme a senha"
                    value={confirmPassword}
                    minLength="8"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required                
                />
                <ModelButton type="submit">Cadastrar</ModelButton>
            </Form>
            <SimpleButton onClick={() => history.push("/")}>
                Já tem uma conta? Entre agora!
            </SimpleButton>
        </ContainerForm>
    );
}

export default SignUp;
