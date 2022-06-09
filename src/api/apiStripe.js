import apiClient from './clientTokenAuth'
 
const endpoint='/api/create-checkout-session'

export const postTransaction=async(token, data, cancelToken)=>{
    const response = await apiClient(token,cancelToken).post(endpoint, data);
    console.log('here', response, data)
    return 
}

export default{
    postTransaction
}