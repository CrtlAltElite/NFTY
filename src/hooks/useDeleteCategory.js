import {useEffect, useContext} from 'react'
import {CancelToken} from 'apisauce'
import apiCategory from '../api/apiCategory'
import { AppContext } from '../context/AppContext'

export default function useDeleteCategory(categoryID) {
    const {user, setAlert} = useContext(AppContext)

    useEffect(
        ()=>{
            let response
            const source = CancelToken.source()
            if (categoryID){
                (async()=>{
                    response = await apiCategory.del(user.token, categoryID, source.token)
                    if (response){
                         setAlert({msg:`Category: ${categoryID} Deleted`, cat:'success'})
                    }else if(response === false && response !== undefined){
                         setAlert({msg:`Please reauthorize you account`, cat:'warning'})
                    }
                })()
            }
            return ()=>{source.cancel()}
        },[categoryID, user.token]
    )
}
