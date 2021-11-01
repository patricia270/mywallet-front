import { useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "../Contexts/UserContext";
import { postNewInput } from "../Services/Api";
import errors from "../Services/Errors";
import { 
    HeaderDiv,
    Form,
    SessionTitle,
    Input,
    ModelButton,
    ContainerNewRegister
} from "../Styles/genericStyledComponents";

function NewInput() {
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const { user } = useContext(UserContext);
    const history = useHistory();
    
    if (!localStorage.getItem("MyWalletUserData")) {
        history.push("/");
    }

    function sendInput(event) {
        event.preventDefault();
        
        const body = {
            value,
            description
        };
    
        const config = {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
        };
    
        postNewInput(body, config)
            .then(() => {
                history.push("/registries");
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
                <Form onSubmit={sendInput}>
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
                    <ModelButton type="submit">Salvar entrada</ModelButton>
                </Form>
            </ContainerNewRegister>
        </>
    );
}

export default NewInput;