import React from 'react'
import Table from 'react-bootstrap/Table';


export const CrudTable = ({equipos, setEditData}) => {
  return (
    <div>
      <h3>Equipos Actuales</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
          <td>#</td>
          <td>Equipo</td>
          <td>Pais</td>
          <td></td>
          </tr>
        </thead>
        <tbody>
        {equipos.length === 0 ? <tr>No hay datos</tr>  
        : equipos.map(equipo=>(
            <tr key={equipo.id}>
              <td>{equipo.id}</td>
              <td>{equipo.equipo}</td>
              <td>{equipo.pais}</td>
              <td>
                <button onClick={()=>setEditData(equipo)} className='btn btn-warning mx-1'>Editar</button>
                <button className='btn btn-danger mx-1'>Eliminar</button>
              </td>
            </tr>
          ))
        }
        </tbody>
      </Table>
    </div>
  )
}
