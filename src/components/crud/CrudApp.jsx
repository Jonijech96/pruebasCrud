import React, { useState } from 'react'
import { CrudForm } from './CrudForm'
import { CrudTable } from './CrudTable'

const baseDatos= [
  {id:0,equipo:"Barcelona",pais:"España"},
  {id:1,equipo:"RIVER",pais:"Argentina"},
  {id:2,equipo:"Voca",pais:"Argentina"},
  {id:3,equipo:"Teemperley",pais:"Argentina"},
  {id:4,equipo:"Sacachispas",pais:"Argentina"},
]

export const CrudApp = () => {
  const [equipos, setEquipos] = useState(baseDatos);
  const [editData, setEditData] = useState(null);
  const addEquipo = (equipo)=>{
    setEquipos([...equipos,equipo]);
  }
  const editEquipo = (equipoEdit)=>{
    const newEquipos = equipos.map(equipo=>equipo.id === equipoEdit.id ? equipoEdit : equipo);
    setEquipos(newEquipos);
    setEditData(null);
  }
  return (
    <div className='container'>
      <h2>Crud de Equipos de futbol</h2>
      <CrudForm addEquipo={addEquipo} editData={editData} editEquipo={editEquipo}/>
      <CrudTable equipos={equipos} setEditData={setEditData}/>
    </div>
  )
}
