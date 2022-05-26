import React from 'react';
import * as Yup from "yup";
import { useFormik } from 'formik';
import Button from '../components/Button';
import TextField from '@mui/material/TextField';

//Defining our yup validation
const FormSchema=Yup.object(
    {
        name:Yup.string().required(),
    }
)



export default function CatForm({ category={id:1, name:"pants"} }){
    
    const initialValues={
        name:category?.name ?? '',
    }
    
    const handleSubmit=(values, resetForm)=>{
        if (category){
            console.log('Editing Cat')
        }else{
            console.log('Creating Cat')
        }
        console.log(values)
        resetForm(initialValues)
    }

    const formik = useFormik({
        initialValues:initialValues,
        validationSchema:FormSchema,
        onSubmit:(values, {resetForm})=>{handleSubmit(values, resetForm)},
        enableReinitialize:true
    })

    return(
        <form onSubmit={formik.handleSubmit}>
            <TextField
                id="name"
                name="name"
                fullWidth
                sx={{mb:2, mt:2}}
                label="name"
                placeholder="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}            
            />

            <Button type="submit" sx={{width:"100%"}}>{category?"Edit Category":"Create Cat"}</Button>
        </form>
    )

}