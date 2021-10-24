import { 
    Header,
    Form,
    SessionTitle,
    Input,
    ModelButton,
    ContainerNewRegister
} from "../Styles/StyledComponents";

function NewInput() {
    return(
        <>
            <Header>
                <SessionTitle>Nova entrada</SessionTitle>
            </Header>
            <ContainerNewRegister>
                <Form>
                    <Input type="number" placeholder="Valor" />
                    <Input type="text" placeholder="Descrição"/>
                    <ModelButton>Salvar entrada</ModelButton>
                </Form>
            </ContainerNewRegister>
        </>
    );
}

export default NewInput;