import styled from "styled-components";
import Register from "./Register";

function WithRegistries () {
    const registries = [];
    
    return (
        <ContainerRegistries>
            <RegistriesList>
                {registries ?
                    registries.map((register) => (
                        <Register register={register} />) )
                    : "" }
            </RegistriesList>
            <BoxBalance>
                <h3>SALDO</h3>
                <span>2849,96</span>
            </BoxBalance>
        </ContainerRegistries>
    );
}

export default WithRegistries;

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

const RegistriesList = styled.div`
    height: 416px;
    padding: 0 11px 0 15px;
`;

const BoxBalance = styled.div`
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
    span {
        color: #03AC00;
    }
`;

