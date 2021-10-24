import styled from "styled-components";

const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Form = styled.form`
    display: flex;
    width: 86.9vw;
    flex-direction: column;
    align-items: center;
    margin-bottom: 32px;
    text-align: center;
`;

const Title = styled.h1`
    margin-top: 95px;
    font-size: 32px;
    color: #FFFFFF;
    font-family: 'Saira Stencil One', cursive;
    margin-bottom: 20px;
`;

const Input = styled.input`
    margin-top: 13px;
    width: 86.9vw;
    height: 58px;
    color: #000000;
    font-size: 20px;
    border-radius: 5px;
    padding-left: 15px;
`;

const ModelButton = styled.button`
    margin-top: 13px;
    /* width: 326px; */
    width: 91vw;
    height: 46px;
    background-color: #A328D6;
    border-radius: 5px;
    font-size: 20px;
    color: #FFFFFF;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    &:hover {
        cursor: pointer;
        filter: brightness(110%);
    }
`;
const SimpleButton = styled.button`
    font-size: 15px;
    width: 91vw;
    font-family: 'Raleway', sans-serif;
    color: #FFFFFF;
    font-weight: bold;
    background-color: transparent;
    &:hover {
        cursor: pointer;
    }
`;

const Header = styled.div`
    height: 78px;
    padding: 0 25px 0 25px;
    display: flex;
    justify-content: space-between;
    align-items: center; 
`;

const SessionTitle = styled.h2`
    font-size: 26px;
    color: #FFFFFF;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
`;


export {
    ContainerForm,
    Form,
    Title,
    Input,
    ModelButton,
    SimpleButton,
    Header,
    SessionTitle
};