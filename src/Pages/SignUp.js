import { Link } from 'react-router-dom';
import {
    ContainerForm,
    Form,
    Title,
    Input,
    ModelButton,
    SimpleButton
} from '../Styles/StyledComponents';

function SignUp() {
    return (
        <ContainerForm isLogin={false}>
            <Form>
                <Title>MyWallet</Title>
                <Input type="text" placeholder="Nome" />
                <Input type="email" placeholder="E-mail" />
                <Input type="password" placeholder="Senha" />
                <Input type="password" placeholder="Confirme a senha" />
                <ModelButton>Cadastrar</ModelButton>
            </Form>
            <Link to='/'>
                <SimpleButton>Já tem uma conta? Entre agora!</SimpleButton>
            </Link>
        </ContainerForm>
    );
}

export default SignUp;
