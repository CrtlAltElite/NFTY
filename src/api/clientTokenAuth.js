import {create} from "apisauce";

const apiClient = (cancelToken, token) =>create({
    baseURL: window.location.host ==='127.0.0.1'||'localhost' ? "127.0.0.1:5000":'',
    headers:{
        Authorization:"Bearer "+token
    },
    cancelToken
})

export default apiClient