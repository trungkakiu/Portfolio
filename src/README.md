<<<<<<< HEAD
## const showToast = (id, message, type, containerId) => {
        if (toast.isActive(id)) {
          toast.update(id, {
            render: message,
            type,
            containerId: containerId,
            autoClose: 5000, 
            closeOnClick: true
          });
        } else {
          toast[type](message, {
            toastId: id,
            containerId: containerId
          });
        }
    };
// hàm toast show

##  @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
// animation spin

##  @keyframes shake {
      0% { transform: translateX(0); }
      25% { transform: translateX(-4px) rotate(-10deg); }
      50% { transform: translateX(4px) rotate(10deg); }
      75% { transform: translateX(-4px) rotate(-10deg); }
      100% { transform: translateX(0); }
  }
// animation lắc lư 


##  overflow-y: scroll; 
    scrollbar-width: none; 
    -ms-overflow-style: none;
// tắt overflow y

## box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2), 
    -3px -3px 5px rgba(255, 255, 255, 0.5);
// shadow
=======
# E-STORE-FRONT-END
The front-end project clone TEMU SHOPPEE and some thing web other 
>>>>>>> 6fb886882f7d3aa8595d79f2fbbf00a4dada4d91
