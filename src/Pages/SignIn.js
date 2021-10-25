import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { postSignIn } from '../Services/Api';
import UserContext from '../Contexts/UserContext';
import { useContext, useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import {
    Form,
    Title,
    Input,
    ModelButton,
    SimpleButton
} from '../Styles/StyledComponents';

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if (!!localStorage.getItem("MyWalletUserData")) {
          history.push("/registries");
        }    
        return () => {
          setEmail({});
          setPassword({});
        };
      }, []);
    
    const body = {
        email,
        password,
    };

    function SendloginInfo(event) {
        event.preventDefault();
        postSignIn(body)
            .then((resp) => {
                setUser(resp.data);
                localStorage.setItem("MyWalletUserData", JSON.stringify(resp.data));
                history.push("/registries");
            })
            .catch(() => {                
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `Seus dados não foram encontrados,
                            verifique se digitou tudo corretamente!`,
                })
                
            })
    }

    return (
        <ContainerFormLogin>
            <Form onSubmit={SendloginInfo}>
                <Title>MyWallet</Title>
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
                    minLength="8"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <ModelButton type="submit">Entrar</ModelButton>
            </Form>
            <SimpleButton onClick={() => history.push("/sign-up")}>
                Primeira vez? Cadastre-se!
            </SimpleButton>
        </ContainerFormLogin>
    );
}

const ContainerFormLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 64px;
`;

export default SignIn;
