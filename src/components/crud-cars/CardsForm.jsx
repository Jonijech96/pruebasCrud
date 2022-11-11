import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'


export const CardsForm = ({getCars,carSelected,selectCard}) => {
  const {handleSubmit, register, reset}= useForm();
  const initialValue = {
    brand:"",
    model:"",
    color:"",
    year:"",
    price:""
  }
  useEffect(() => {
    if(carSelected){
      reset(carSelected)
    }else{
      reset(initialValue)
    }

    
  
  }, [carSelected])
  

  const submit = (data)=>{
    if(carSelected){
      axios.put(`http://cars-crud.academlo.tech/cars/${carSelected.id}/`,data)
      .then(()=>getCars())
      .catch(error=>console.log(error.response?.data))
      selectCard(null);
    }else{
      axios.post("http://cars-crud.academlo.tech/cars/",data)
      .then(()=>getCars())
      .catch(error=>console.log(error.response?.data))
    }
  }


  return (
    <Box maxW="600px" mx="auto" p={4}>
        
      <form action="" onSubmit={handleSubmit(submit)}>
      <FormControl mb={4} id='brand' >
        <FormLabel>Brand</FormLabel>
        <Input type='text' placeholder='name' {...register("brand")}/>
        <FormHelperText>ingrese nombre del vehiculo</FormHelperText>
      </FormControl>
      <FormControl mb={4} id='model'>
        <FormLabel>Model</FormLabel>
        <Input type='text' placeholder='model' {...register("model")}/>
        <FormHelperText>ingrese Modelo del vehiculo</FormHelperText>
      </FormControl>
      <FormControl mb={4} id='color'>
        <FormLabel>Color</FormLabel>
        <Input type='text' placeholder='Color' {...register("color")}/>
        <FormHelperText>ingrese color del vehiculo</FormHelperText>
      </FormControl>
      <FormControl mb={4} id='year'>
        <FormLabel>Year</FormLabel>
        <Input type='number'  {...register("year")}/>
        <FormHelperText>ingrese año del vehiculo</FormHelperText>
      </FormControl>
      <FormControl id='price'>
        <FormLabel>Price</FormLabel>
        <Input type='number'  {...register("price")}/>
        <FormHelperText>ingrese Precio del vehiculo</FormHelperText>
      </FormControl>
      <Button colorScheme='gray.200' variant="outline" type="submit">Save</Button>
        {/* <button>enviar</button> */}
      </form>
    </Box>
  )
}
