import Swal from 'sweetalert'

 const ModalAlert = function success(text) {
    Swal(
        'Good job!',
        'You clicked the button!',
        text
    )
}

export default ModalAlert