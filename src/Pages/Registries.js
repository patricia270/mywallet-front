import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getRegistries } from "../Services/Api";
import errors from "../Services/Errors";
import UserContext from "../Contexts/UserContext";
import Loading from "../Components/Loading";
import WithRegistries from "../Components/WithRegistries";
import Header from "../Components/Header";
import {
    BoxEmpty,
    AddButton,
    BoxAddRegister,
    IconAddRegisterInput,
    IconAddRegisterOutput,
    Span,
    ContainerRegistries,
    BoxBalance
} from "../Styles/styleRegistries";

function Registries () {
    const [registriesList, setRegistriesList] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useContext(UserContext);
    const history = useHistory();    

    useEffect(() => {
        if (!localStorage.getItem("MyWalletUserData")) {
            return history.push("/");
        }

        const config = {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
        };
        
        getRegistries(config)
            .then((resp) => {
                setRegistriesList(resp.data);
                setIsLoading(false);
            })
            .catch((error) => {
                errors(error);
            })
    }, []);

    if(isLoading) {
        return (
            <Loading />
        );
    } 
   
    let saldo = registriesList.registries.map((e) => 
            e.register_type === "Saída" ? -e.value : +e.value)
            .reduce((total, numero) => total + numero, 0)

    return (
        <>
            <Header />
            {registriesList.registries.length === 0 ? 
                <BoxEmpty>
                    <p>Não há registros de entrada ou saída</p>
                </BoxEmpty> :
                <ContainerRegistries>
                    <WithRegistries registriesList={registriesList}/>
                    <BoxBalance isPositive={Number(saldo)}>
                        <h3>SALDO</h3>
                        <h4>
                            {saldo.toFixed(2).replace(".", ",")}
                        </h4>
                    </BoxBalance>
                </ContainerRegistries> }
            <BoxAddRegister>
                <AddButton onClick={() => history.push("/inputs")}>
                    <IconAddRegisterInput/>
                    <Span>Nova entrada</Span>
                </AddButton>
                <AddButton onClick={() => history.push("/outputs")}>
                    <IconAddRegisterOutput/>
                    <Span>Nova saída</Span>
                </AddButton>
            </BoxAddRegister>
        </>
    );
}

export default Registries;