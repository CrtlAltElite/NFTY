import React, { useContext } from 'react'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Button from '../Button'
import { AppContext } from '../../context/AppContext'


export default function CheckoutBar() {
  const {user, cart} =useContext(AppContext)

  return (
    <Box sx={{position:'fixed', right:'10px', bottom:'10px', p:2, display:"flex", alignContent:"center", backgroundColor:"#33333325", border:'1px solid black'}}>
        <Stack>
            <Typography variant="h6">
                Cart Total: ${cart?.reduce((total, nextItem)=>({"price":total.price+nextItem.price})).price.toFixed(2) }
            </Typography>
            <Button>Checkout</Button>
        </Stack>
    </Box>
  )
}

