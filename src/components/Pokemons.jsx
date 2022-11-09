import React from 'react'
import usePokemon from '../hooks/usePokemon';

export const Pokemons = () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";
  const {pokemons, isLoading}=usePokemon(url);
  
  console.log(pokemons);
  return (
    <div>
      <h1>Pokemons</h1>
      {isLoading 
      ? <h2>Cargando</h2> 
      :<ul>
        {pokemons.map(pokemon=>(
          <li key={pokemon.url}>{pokemon.name}</li>
        ))}
      </ul>
      }
      
    </div>
  )
}
