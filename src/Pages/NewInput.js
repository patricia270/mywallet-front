import styled from "styled-components";
import { 
    Header,
    Form,
    SessionTitle,
    Input,
    ModelButton
} from "../Styles/StyledComponents";

function NewInput() {
    return(
        <>
            <Header>
                <SessionTitle>Nova entrada</SessionTitle>
            </Header>
            <ContainerNewInput>
                <Form>
                    <Input type="number" placeholder="Valor" />
                    <Input type="text" placeholder="Descrição"/>
                    <ModelButton>Salvar entrada</ModelButton>
                </Form>
            </ContainerNewInput>
        </>
    );
}

export default NewInput;

const ContainerNewInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;