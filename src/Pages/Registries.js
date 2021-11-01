import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { getRegistries } from "../Services/Api";
import errors from "../Services/Errors";
import UserContext from "../Contexts/UserContext";
import Loading from "../Components/Loading";
import WithRegistries from "../Components/WithRegistries";
import Header from "../Components/Header";
import {
    IoIosAddCircleOutline, 
    IoIosRemoveCircleOutline
} from "react-icons/io";


function Registries () {
    const [registriesList, setRegistriesList] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useContext(UserContext);
    const history = useHistory();    

    useEffect(() => {
        if (!localStorage.getItem("MyWalletUserData")) {
            return history.push("/")
        }

        const config = {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
        };
        
        getRegistries(config)
            .then((resp) => {
                setRegistriesList(resp.data)
                setIsLoading(false)
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



const BoxEmpty = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px;
    height: 66.86vh;
    background-color: #FFFFFF;
    margin: 0 auto; 
    p {
        font-size: 20px;
        width: 180px;
        color: #868686;
        text-align: center;
        font-family: 'Raleway', sans-serif;
    }
    @media (max-width: 700px) {
        width: 86.9vw;
    }
    
`;

const AddButton = styled.div`
    width: 155px;
    height: 114px;
    background-color: #A328D6;
    position: relative;
    padding: 0;
    margin: 0 5px 0 5px;
`;

const BoxAddRegister = styled.div`
    display: flex;
    justify-content: center;
    padding: 13px 15px 10px 15px;
`;

const IconAddRegisterInput = styled(IoIosAddCircleOutline)`
    position: absolute;
    width: 25px;
    height: 25px;
    color: #FFFFFF;
    top: 10px;
    left: 10px;
    stroke-width: 10px;
`;

const IconAddRegisterOutput = styled(IoIosRemoveCircleOutline)`
    position: absolute;
    width: 25px;
    height: 25px;
    color: #FFFFFF;
    top: 10px;
    left: 10px;
    stroke-width: 10px;
`;

const Span = styled.span`
    position: absolute;
    left: 10px;
    bottom: 9px;
    font-family: 'Raleway', sans-serif;
    font-size: 17px;
    color: #FFFFFF;
    font-weight: bold;
    width: 44px;
`;

const ContainerRegistries = styled.div`
    width: 86.9vw;
    height: 446px;
    background-color: #FFFFFF;
    margin: 0 auto; 
    width: 600px;
    height: 66.86vh;
    p {
        font-size: 20px;
        width: 180px;
        color: #868686;
        text-align: center;
    }
    @media (max-width: 700px) {
        width: 86.9vw;
    }
`;

const BoxBalance = styled.div`
    background-color: "#03AC00";
    height: 30px;
    padding: 0 11px 0 15px;
    font-size: 17px;
    display: flex;
    justify-content: space-between;
    font-family: 'Raleway', sans-serif;
    h3 {
        color: #000000;
        font-weight: bold;
    }
    h4 {
        max-width: 30vw;
        overflow: hidden;
        word-break: break-all;
        color: ${({isPositive}) => 
            isPositive === 0 ? "#000000" : 
            isPositive > 0 ? "#03AC00" : 
            "#CF3620"
        };
    }
`;

