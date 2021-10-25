import { useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "../Contexts/UserContext";

import { 
    HeaderDiv,
    Form,
    SessionTitle,
    Input,
    ModelButton,
    ContainerNewRegister
} from "../Styles/StyledComponents";

function NewInput() {
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const { user } = useContext(UserContext);
    const history = useHistory();
    
    

    return(
        <>
            <HeaderDiv>
                <SessionTitle>Nova entrada</SessionTitle>
            </HeaderDiv>
            <ContainerNewRegister>
                <Form >
                    <Input 
                        type="number" 
                        placeholder="Valor"
                        value={value}
                        maxLength="10"
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
                    <ModelButton>Salvar entrada</ModelButton>
                </Form>
            </ContainerNewRegister>
        </>
    );
}

export default NewInput;