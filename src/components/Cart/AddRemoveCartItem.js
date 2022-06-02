import React from 'react'
import ButtonGroup from '@mui/material/ButtonGroup'
import IconButton from '@mui/material/IconButton';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import RemoveCircleTwoToneIcon from '@mui/icons-material/RemoveCircleTwoTone';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';

export default function AddRemoveCartItem({item}) {
  return (
    <ButtonGroup sx={{margin:"auto"}}>
        <IconButton key="delete" onClick={()=>{console.log(`Delete all ${item.name} from cart`)}}>
            <DeleteForeverTwoToneIcon fontSize="small"/>
        </IconButton>
        <IconButton key="rm" onClick={()=>{console.log(`Remove one  ${item.name}  from cart`)}}>
            <RemoveCircleTwoToneIcon fontSize="small"/>
        </IconButton>
        <IconButton key="add" onClick={()=>{console.log(`Add Another ${item.name}  to cart`)}}>
            <AddCircleTwoToneIcon fontSize="small"/>
        </IconButton>
    </ButtonGroup>
  )
}
