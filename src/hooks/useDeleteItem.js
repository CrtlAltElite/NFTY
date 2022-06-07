import {useEffect, useContext} from 'react'
import {CancelToken} from 'apisauce'
import apiItem from '../api/apiItem'
import { AppContext } from '../context/AppContext'

export default function useDeleteItem(item) {
    const {user, setAlert} = useContext(AppContext)

    useEffect(
        ()=>{
            let response
            const source = CancelToken.source()
            if (item?.name){
                (async()=>{
                    response = await apiItem.del(user.token, item.id, source.token)
                    if (response){
                         setAlert({msg:`Item: ${item.name} Editted`,cat:'success'})
                    }else if(response === false && response !== undefined){
                         setAlert({msg:`Please reauthorize you account`,cat:'warning'})
                    }
                })()
            }
            return ()=>{source.cancel()}
        },[item, user.token]
    )
}
