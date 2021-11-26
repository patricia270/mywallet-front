import styled from 'styled-components';
import { Form, Field } from 'formik';

const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: ${({ isLogin }) => isLogin ? '64px' : '0'};
`;

const DivMessage = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    span {
        color: #FFFF00;
        align-self: start;
        margin: 5px 0 0 5px;
        text-align: start;
    }
`;

const FormComponent = styled(Form)`
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
    @media (max-height: 600px) {
        margin-top: 50px;
    }
`;

const Input = styled(Field)`
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
    @media (max-height: 580px) {
        height: 40px;
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
    @media (max-height: 620px) {
        h2, span {
            font-size: 23px;
        }
        svg {
            height: 35px;
            width: 35px
        }
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
    FormComponent,
    Title,
    Input,
    ModelButton,
    SimpleButton,
    HeaderDiv,
    SessionTitle,
    ContainerNewRegister,
    DivMessage,
};