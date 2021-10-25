import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../Contexts/UserContext";
import styled from "styled-components";
import { getRegistries } from "../Services/Api";
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
    
    const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
    };

    useEffect(() => {
        getRegistries(config)
            .then((resp) => {
                setRegistriesList(resp.data)
                setIsLoading(false)
            })
            .catch((err) => {
                console.log("erro")
            })
    }, []);

    if(isLoading) {
        return (
            <Loading />
        );
    }  
   

    return (
        <>
            <Header />
            {registriesList.registries.length === 0 ? 
                <BoxEmpty>
                    <p>Não há registros de entrada ou saída</p>
                </BoxEmpty> :
                <ContainerRegistries>
                    <WithRegistries registriesList={registriesList}/>
                    <BoxBalance isPositive={Number(registriesList.saldo)}>
                        <h3>SALDO</h3>
                        <h4>{registriesList.saldo}</h4>
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
    width: 86.9vw;
    height: 446px;
    background-color: #FFFFFF;
    margin: 0 auto; 
    p {
        font-size: 20px;
        width: 180px;
        color: #868686;
        text-align: center;
        font-family: 'Raleway', sans-serif;
    }
    
`;

const AddButton = styled.div`
    width: 155px;
    height: 114px;
    background-color: #A328D6;
    position: relative;
    padding: 0;
`;

const BoxAddRegister = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 13px 24px 0 24px;
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
    p {
        font-size: 20px;
        width: 180px;
        color: #868686;
        text-align: center;
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

