import styled from "styled-components";
import dayjs from "dayjs";

const Register = ({date, description, value, register_type}) => {
    
    return (
        <ItemRegister>
            <BoxDateAndDescription>
                <Date>{dayjs(date).format('MM/YYYY')}</Date>
                <Description>{description}</Description>
            </BoxDateAndDescription>
            <Value register_type={register_type}>{value}</Value>
        </ItemRegister>
    );
}

export default Register;

const ItemRegister = styled.div`
    padding-top: 23px;
    display: flex;
    justify-content: space-between;
`;

const BoxDateAndDescription = styled.div`
    display: flex;
`;

const Date = styled.span`
    font-size: 16px;
    margin-right: 10px;
    font-family: 'Raleway', sans-serif;
    color: #C6C6C6;
`;

const Description = styled.h3`
    font-size: 16px;
    margin-right: 10px;
    font-family: 'Raleway', sans-serif;
    color: #000000;
`;

const Value = styled.span`
    font-size: 16px;
    margin-right: 10px;
    font-family: 'Raleway', sans-serif;
    color: ${({register_type}) => (
        register_type === 'Saída' ? 
        '#CF3620' : 
        '#03AC00')};
`;
