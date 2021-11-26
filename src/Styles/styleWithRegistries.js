import styled from 'styled-components';

const RegistriesList = styled.div`
    height: 62.36vh;
    overflow-y: scroll;
    padding: 0 11px 0 15px;
    ::-webkit-scrollbar {
        display: none;
    }    
`;

const ItemRegister = styled.div`
    padding-top: 23px;
    display: flex;
    justify-content: space-between;
    :last-child {
        margin-bottom: 20px;
    }
`;

const BoxDateAndDescription = styled.div`
    display: flex;
`;

const Date = styled.span`
    font-size: 16px;
    margin-right: 10px;
    font-family: 'Raleway', sans-serif;
    color: #868686;
`;

const Description = styled.h3`
    font-size: 16px;
    margin-right: 10px;
    font-family: 'Raleway', sans-serif;
    color: #000000;
    max-width: 40vw;
    word-break: break-all;
`;

const Value = styled.span`
    font-size: 16px;
    font-family: 'Raleway', sans-serif;
    max-width: 30vw;
    word-break: break-all;
    color: ${({register_type}) => (
        register_type === 'Saída' ? 
        '#CF3620' : 
        '#03AC00')};
`;

export {
    RegistriesList,
    ItemRegister,
    BoxDateAndDescription,
    Date,
    Description,
    Value,
}
