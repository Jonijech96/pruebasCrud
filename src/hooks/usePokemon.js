import React, { useEffect, useState } from 'react'

const usePokemon = (url) => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetch(url).then((response)=>response.json())
    .then(data=>{setIsLoading(false);setPokemons(data.results)});
  
  }, [url])
  
  return {pokemons,isLoading}
}

export default usePokemon