import { toast } from 'react-toastify';
import '../Scss/CustomToast.scss'

const showToast = (id, message, type, containerId, customClass) => {
    if (toast.isActive(id)) {
        toast.update(id, {
        render: message,
        type,
        containerId: containerId,
        autoClose: 5000, 
        closeOnClick: true,
        className: customClass,
        });
    } else {
        toast[type](message, {
        toastId: id,
        containerId: containerId,
        className: customClass,
        });
    }
};



const ToastSuccess = (ToastID, message, ContainerID) =>{
    showToast(ToastID, message, 'success', ContainerID, 'toast-success');
}

const ToastError = (ToastID, message, ContainerID) =>{
    showToast(ToastID, message, 'error', ContainerID, 'toast-error');
}

const ToastWarning = (ToastID, message, ContainerID) =>{
    showToast(ToastID, message, 'warning', ContainerID, 'toast-warning');
}


export default {
    ToastSuccess, ToastError, ToastWarning
}