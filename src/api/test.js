import apiClient from "./clientNoAuth";

export const test= async (cancelToken)=>{
    let response =await apiClient(cancelToken).get('/api/item')
    console.log(response,'r')

}
