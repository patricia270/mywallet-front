import { 
    Header,
    Form,
    SessionTitle,
    Input,
    ModelButton,
    ContainerNewRegister
} from "../Styles/StyledComponents";

function NewOutput() {
    return(
        <>
            <Header>
                <SessionTitle>Nova saída</SessionTitle>
            </Header>
            <ContainerNewRegister>
                <Form>
                    <Input type="number" placeholder="Valor" />
                    <Input type="text" placeholder="Descrição"/>
                    <ModelButton>Salvar saída</ModelButton>
                </Form>
            </ContainerNewRegister>
        </>
    );
}

export default NewOutput;