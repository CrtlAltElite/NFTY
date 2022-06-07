import {useEffect, useContext} from 'react'
import {CancelToken} from 'apisauce'
import apiItem from '../api/apiItem'
import { AppContext } from '../context/AppContext'

export default function useEditItem(item, itemID) {
    const {user, setAlert} = useContext(AppContext)

    useEffect(
        ()=>{
            let response
            const source = CancelToken.source()
            if (item?.name){
                (async()=>{
                    response = await apiItem.put(user.token, itemID, item, source.token)
                    if (response){
                         setAlert({msg:`Item: ${item.name} Editted`,'cat':'success'})
                    }else if(response === false && response !== undefined){
                         setAlert({msg:`Please reauthorize you account`,'cat':'warning'})
                    }
                })()
            }
            return ()=>{source.cancel()}
        },[item, itemID, user.token]
    )
}
