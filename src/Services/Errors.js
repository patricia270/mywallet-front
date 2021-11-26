import Swal from 'sweetalert2';

function errors(error) {
    if (error.response.status === 400) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Seus dados não foram encontrados,
                    verifique se digitou tudo corretamente!`,
        })
    }
    
    if (error.response.status === 409) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Este email já foi cadastrado!`,
        })
    }
    if (error.response.status === 500) {
        Swal.fire({
            icon: 'error',
            title: '500',
            text: `Internal Server Error.`,
        })
    }
}

export default errors;