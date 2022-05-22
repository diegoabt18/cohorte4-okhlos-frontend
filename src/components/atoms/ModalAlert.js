import Swal from 'sweetalert'

 const ModalAlert = function success(title,text,icon) {
    Swal(
        title,
        text,
        icon
    )
}

export default ModalAlert