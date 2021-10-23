import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
    Form,
    Title,
    Input,
    ModelButton,
    SimpleButton
} from '../Styles/StyledComponents';

function SignIn() {
    return (
        <ContainerFormLogin>
            <Form>
                <Title>MyWallet</Title>
                <Input type="email" placeholder="E-mail" />
                <Input type="password" placeholder="Senha" />
                <ModelButton>Entrar</ModelButton>
            </Form>
            <Link to='/sign-up'>
                <SimpleButton>Primeira vez? Cadastre-se!</SimpleButton>
            </Link>
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
