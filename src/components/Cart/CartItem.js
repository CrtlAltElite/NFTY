import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import CartCard from './CartCard';
import ChangeCartItemQuanitity from './ChangeCartItemQuanitity';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CartItem({item}) {

    const [qty, setQty]=useState(cart.filter((cartItem)=>cartItem.id===item.id).length)
  return (
      <Grid container spacing={2} sx={{m:1, pr:2, borderRadius:1, alignItems:"stretch"}}>
        <Grid item md={4} sm={6} xs={12}>
          <Item sx={{height:'100%'}}>
              <Avatar alt={item.name} variant="rounded" src={item.img} sx={{height:'100%', width: '100%'}}/>
          </Item>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Item sx={{height:'100%'}}>
              <CartCard item={item}/>
          </Item>
        </Grid>
        <Grid item md={2} sm={6} xs={12}>
          <Item sx={{height:'100%', alignContent: 'center'}}>
              <ChangeCartItemQuanitity qty={qty} item={item} setQty={setQty}/>
          </Item>

        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Item sx={{height:'100%'}}>
              <div>
                  <strong>Item Subtotal </strong>
                  <br/>
                  ${(item.price*qty).toFixed(2)}
              </div>
          </Item>
        </Grid>
      </Grid>
  );
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