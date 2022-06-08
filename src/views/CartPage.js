import { Typography } from '@mui/material'
import {useContext} from 'react'
import Cart from '../components/Cart/Index'
import { AppContext } from '../context/AppContext'

export default function CartPage() {    
    const {cart} = useContext(AppContext)

    if (cart.length<=0){
        return(
            <Typography variant="h3">Your Cart Is Empty</Typography>
        )
    }
  return (
    <>
        <Typography variant="h3">Your Cart</Typography>
        <Cart/>

    </>
  )
}
