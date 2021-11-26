import Loading from './Loading';
import dayjs from 'dayjs';
import {
    RegistriesList,
    ItemRegister,
    BoxDateAndDescription,
    Date,
    Description,
    Value
} from '../Styles/styleWithRegistries';

function WithRegistries({registriesList}) {
    if(registriesList === undefined) {
        return(
            <Loading />
        );
    }

    return (
        <RegistriesList>
            {registriesList.registries ?
                registriesList.registries.map((
                    {date, description, register_type, value}, index) => (
                    <ItemRegister key={index}>
                        <BoxDateAndDescription>
                            <Date>{dayjs(date).format('MM/YYYY')}</Date>
                            <Description>{description}</Description>
                        </BoxDateAndDescription>
                        <Value register_type={register_type}>
                            {value.replace('.', ',')}
                        </Value>
                    </ItemRegister> )) : '' }
        </RegistriesList>
    );
}

export default WithRegistries;