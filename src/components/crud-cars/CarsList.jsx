import React from 'react'

export const CarsList = ({carsList,selectCard,deleteCard}) => {
  return (
    <ul>
      {carsList.map(car=>(
        <li key={car.id}>
          <p>{car.brand}</p>
          <p>{car.model}</p>
          <p>{car.color}</p>
          <p>{car.year}</p>
          <p>{car.price}</p>
          <button onClick={()=>selectCard(car)}>select</button>
          <button onClick={()=>deleteCard(car.id)}>delete</button>

        </li>
      ))}
    </ul>
  )
}
