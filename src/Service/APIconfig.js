import apiClient from "./ApiClient";

//credentials: 'include' 
 
const apiURL = process.env.REACT_APP_API_URL;
const handleLogin = async(data) =>{
    try {
        const rp = await apiClient.post(`${apiURL}/api/v1/Authenticate/Login`, {
            data: data
        });
        return rp;
    } catch (error) {
        console.error(error);
        return error;
    }
}


const handleRegister = async(data) =>{
    try {
        const rp = await apiClient.post(`${apiURL}/api/v1/Authenticate/Register`, {
            data: data
        });
        return rp;
    } catch (error) {
        return error;
    }
}
export default  {
    handleLogin, handleRegister
};