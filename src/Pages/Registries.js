import styled from "styled-components";
import WithRegistries from "../Components/WithRegistries";
import { Header, SessionTitle } from "../Styles/StyledComponents";
import { IoExitOutline } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import UserContext from "../Contexts/UserContext";
import { getRegistries } from "../Services/Api";
import {
    IoIosAddCircleOutline, 
    IoIosRemoveCircleOutline
} from "react-icons/io";


function Registries () {
    const [registriesList, setRegistriesList] = useState([])
    const { user } = useContext(UserContext);
    const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
    };

    useEffect(() => {
        getRegistries(config)
            .then((resp) => {
                console.log(resp)
            })
            .catch((error) => {
                console.error();
            })
    }, []);
    

    return (
        <>
            <Header>
                <SessionTitle>{`Olá, ${user.username}`}</SessionTitle> 
                <IoExitOutline color="#FFFFFF" size="37px"/>           
            </Header>
            {registriesList ? 
                <WithRegistries /> :
                <BoxEmpty>
                    <p>Não há registros de entrada ou saída</p>
                </BoxEmpty>
            }
            <BoxAddRegister>
                <AddButton>
                    <IconAddRegisterInput/>
                    <Span>Nova entrada</Span>
                </AddButton>
                <AddButton>
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

