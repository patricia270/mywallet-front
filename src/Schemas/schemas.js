import * as Yup from 'yup';

const signUpSchema = Yup.object({
    name: Yup.string().required('Por favor, preencha este campo.')
    .matches(/^([a-z]|[à-ü])/i, 'Inicie com uma letra.'),
    email: Yup.string().email('Insira um email válido')
    .required('Por favor, preencha este campo'),
    password: Yup.string().min(8, 'Deve ter no mínimo 8 caracteres.')
    .matches(/^\S+$/, 'Não deve ter espaços')
    .required('Por favor, preencha este campo'),
    confirmPassword: Yup.string().min(8, 'Deve ter no mínimo 8 caracteres.')
    .matches(/^\S+$/, 'Não deve ter espaços.')
    .required('Por favor, preencha este campo.'),
});

const signInSchema = Yup.object({
    email: Yup.string().email('Insira um email válido.')
    .required('Por favor, preencha este campo.'),
    password: Yup.string().min(8, 'Deve ter no mínimo 8 caracteres.')
    .matches(/^\S+$/, 'Não deve ter espaços')
    .required('Por favor, preencha este campo.'),
});

const inputAndOutputSchema = Yup.object({
    value: Yup.number().typeError('O valor deve ser um número.')
    .max(50000000, 'Mais de 50 milhões? calma aí :)')
    .required('Por favor, preencha este campo.'),
    description: Yup.string().max(15, 'A descrição não deve ter mais de 15 caracteres.')
    .matches(/^([a-z]|[à-ü])/i, 'A descrição deve ser um texto.')
    .required('Por favor, preencha este campo.'),
});

export {
    signUpSchema,
    signInSchema,
    inputAndOutputSchema,
}