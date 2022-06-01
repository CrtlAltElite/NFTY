import React, {useState} from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const categories=[{id:1, name:"Shoes"},{id:2, name:"Pants"},{id:3, name:"Shirts"}]

export default function CategoryBar({handleClick=()=>{}}) {
    const [actCat, setActCat] = useState({});

    const handleActCat=(cat)=>{
      if (actCat===cat){
        setActCat({})
      }else{
        setActCat(cat)
      }
    }

  return (
    <Stack direction="row" spacing={1}>
      {categories.map((cat)=>(
          cat===actCat?
            <Chip 
                key={cat.id} 
                size="small" 
                color="primary"  
                label={cat.name} 
                onClick={()=>{handleActCat(cat); handleClick()}} />
          :
            <Chip 
                variant="outlined" 
                size="small" 
                color="primary" 
                key={cat.id} 
                label={cat.name} 
                onClick={()=>{handleActCat(cat); handleClick()}} />
          )) }
    </Stack>
  );
}

