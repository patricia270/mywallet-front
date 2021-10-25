import { useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "../Contexts/UserContext";
import { postNewOutput } from "../Services/Api";
import { 
    HeaderDiv,
    Form,
    SessionTitle,
    Input,
    ModelButton,
    ContainerNewRegister
} from "../Styles/StyledComponents";

function NewOutput() {
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const { user } = useContext(UserContext);
    const history = useHistory();

    const body = {
        value,
        description,
    };

    const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
    };

    function sendOutput(event) {
        event.preventDefault();
        postNewOutput(body, config)
            .then(() => {
                history.push("/registries");
            })
            .catch((err) => {                
                console.log(err)                
            })
    }
    return(
        <>
            <HeaderDiv>
                <SessionTitle>Nova saída</SessionTitle>
            </HeaderDiv>
            <ContainerNewRegister>
                <Form onSubmit={sendOutput}>
                    <Input 
                        type="text" 
                        pattern="\d*" 
                        maxLength="10"
                        placeholder="Valor"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        required  
                    />
                    <Input 
                        type="text" 
                        placeholder="Descrição"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required  
                    />
                    <ModelButton type="submit">Salvar saída</ModelButton>
                </Form>
            </ContainerNewRegister>
        </>
    );
}

export default NewOutput;