import React, { useEffect, useState } from 'react'

export const CrudForm = ({addEquipo,editData,editEquipo}) => {
  useEffect(() => {
    if(editData){
      setFormData(editData);
    }else{
      setFormData({
        equipo:"",
        pais: "",
        id: null,
      })
    }
  }, [editData])
  
  const [formData, setFormData] = useState({
    equipo:"",
    pais: "",
    id: null,
  })

  const handleSubmit =(e)=>{
    e.preventDefault();

    if(editData){
      editEquipo(formData);  
    }else{
      formData.id = Date.now();
      addEquipo(formData);
      setFormData({
        equipo:"",
        pais: "",
        id: null,
      })
    }
  }

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // console.log(formData);
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="equipo">Equipo:</label>
        <input type="text" name='equipo' onChange={handleChange} value={formData.equipo}/>
        <label htmlFor="pais">Pais:</label>
        <input type="text" name='pais' onChange={handleChange} value={formData.pais}/>
        <input type="submit" value="agregar" className='btn btn-primary mx-1'/>
        <input type="reset" value="cancelar" className='btn btn-danger mx-1'/>
      </form>
    </>
  )
}
