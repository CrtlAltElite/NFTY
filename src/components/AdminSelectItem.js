import React, {useState} from 'react'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import  MenuItem  from '@mui/material/MenuItem';
import  Typography  from '@mui/material/Typography';
import ItemForm from '../forms/ItemForm';

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

const items=[item1, item2, item3]

export default function AdminSelectItem() {
    const [item, setItem] =useState('')

    const handleChange=(event)=>{
        console.log(event.target.value)
        if(event.target.value==='default'){
            setItem('')
            return
        }
        setItem(JSON.parse(event.target.value))
    }

  return (
    <>
        <FormControl fullWidth>
            <InputLabel id="item-label">Item</InputLabel>
            <Select
                labelId="item-label"
                label="Item"
                name="item_id"
                placeholder="Item"
                value={item?JSON.stringify(item):'default'}
                onChange={(event)=>handleChange(event)}
            >
                <MenuItem value="default"><em>Select Item To Edit</em></MenuItem>
                {items.map(
                    (i)=>(
                        <MenuItem key={i.id} value={JSON.stringify(i)}>{i.name}</MenuItem>
                    )
                )}
            </Select>

        </FormControl>

        {item ? 
            <>
                <Typography sx={{p:4}} variant="h5">
                    Edit {item.name}
                </Typography>
                <ItemForm item={item}/>
            </>
            :   
            <>
                <Typography sx={{p:4}} variant="h5">
                    Create 
                </Typography>
                <ItemForm/>
            </>
            }
    </>
  )
}
