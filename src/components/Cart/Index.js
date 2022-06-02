import React from 'react'
import Box from '@mui/material/Box'
import CartItem from './CartItem'
import CheckoutBar from './CheckoutBar'

export default function Index() {
    return (
        <>
            <Box sx={{mb:15}}>
                {
                    [...new Set(cart.map(JSON.stringify))].map(JSON.parse)?.map(
                        (item)=><CartItem key={item.id} item={item}/>
                    )
                }
            </Box>
            <CheckoutBar/>
        </>
        )
  }
  
  
  const item1={
      "id":1,
      "name":"itema",
      "desc":"itema is good",
      "price":2.99,
      "img":"https://res.cloudinary.com/cae67/image/upload/v1651792721/kanye_jvbkns.png",
      "category_id":1
    }
    const item2={
      "id":2,
      "name":"itemB",
      "desc":"itemB is good",
      "price":12.99,
      "img":"https://res.cloudinary.com/cae67/image/upload/v1652745758/kyle1_plkclv.png",
      "category_id":2
    }
    const item3={
      "id":3,
      "name":"itemC",
      "desc":"itemC is good",
      "price":200.00,
      "img":"https://res.cloudinary.com/cae67/image/upload/v1652982371/cow_gkvuce.jpg",
      "category_id":1
    }
    
    const cart=[item1, item2, item2, item2, item3, item3]