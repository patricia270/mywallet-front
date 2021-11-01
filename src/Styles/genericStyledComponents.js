import styled from "styled-components";

const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 32px;
    text-align: center;
    width: 600px;
    @media (max-width: 700px) {
        width: 86.9vw;
    }
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
    height: 58px;
    color: #000000;
    font-size: 20px;
    border-radius: 5px;
    padding-left: 15px;
    width: 600px;
    @media (max-width: 700px) {
        width: 86.9vw;
    }
`;

const ModelButton = styled.button`
    margin-top: 13px;
    height: 46px;
    background-color: #A328D6;
    border-radius: 5px;
    font-size: 20px;
    color: #FFFFFF;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    width: 600px;
    &:hover {
        cursor: pointer;
        filter: brightness(110%);
    }
    @media (max-width: 700px) {
        width: 86.9vw;
    }
`;

const SimpleButton = styled.button`
    font-size: 15px;
    width: 91vw;
    font-family: 'Raleway', sans-serif;
    color: #FFFFFF;
    font-weight: bold;
    background-color: transparent;
    width: 600px;
    &:hover {
        cursor: pointer;
    }
    @media (max-width: 700px) {
        width: 86.9vw;
    }
`;

const HeaderDiv = styled.div`
    height: 78px;
    width: 600px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    @media (max-width: 700px) {
        padding: 0 24px 0 24px;
        width: 100vw;
    }
`;

const SessionTitle = styled.h2`
    font-size: 26px;
    color: #FFFFFF;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    height: 78px;
    display: flex;
    align-items: center;
    max-width: 65vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    span {
        margin-left: 3px;
    }
`;

const ContainerNewRegister = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export {
    ContainerForm,
    Form,
    Title,
    Input,
    ModelButton,
    SimpleButton,
    HeaderDiv,
    SessionTitle,
    ContainerNewRegister
};