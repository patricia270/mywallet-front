import * as Yup from 'yup';

const signUpSchema = Yup.object({
    name: Yup.string().required('Por favor, preencha este campo'),
    email: Yup.string().email('Insira um email válido').required('Por favor, preencha este campo'),
    password: Yup.string().min(8, 'Sua senha precisa ter no mínimo 8 caracteres').required('Por favor, preencha este campo'),
    confirmPassword: Yup.string().min(8, 'Sua senha precisa ter no mínimo 8 caracteres').required('Por favor, preencha este campo'),
});

const signInSchema = Yup.object({
    email: Yup.string().email('Insira um email válido').required('Por favor, preencha este campo'),
    password: Yup.string().min(8, 'Sua senha precisa ter no mínimo 8 caracteres').required('Por favor, preencha este campo'),
});

const inputAndOutputSchema = Yup.object({
    value: Yup.number().typeError('O valor precisa ser um número').required('Por favor, preencha este campo'),
    description: Yup.string().max(15, 'Sua descrição não pode ter mais de 15 caracteres').required('Por favor, preencha este campo'),
});

export {
    signUpSchema,
    signInSchema,
    inputAndOutputSchema,
}