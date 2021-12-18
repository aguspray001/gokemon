import { toast } from "react-toastify";

export const showNotif = (data) => {
    const position = "top-center", autoClose = 5000;
    
    if(data.type==="success" || data.type === true){
        return toast(data.message, {
            position,
            autoClose,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
    }
    else if(data.type==="error" || data.type === false){
        return toast.error(data.message, {
            position,
            autoClose,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
    }
    else{
        return toast(data.message, {
            position,
            autoClose,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
    }
};
