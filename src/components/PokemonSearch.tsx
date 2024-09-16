import { useEffect, useState } from 'react'
import { useFilterContext } from '../hooks/useFilterContext';

const PokemonSearch = () => {

const [pokemon, setPokemon] = useState('')
const {setFilters} = useFilterContext();

useEffect(() => {

    const getData  = setTimeout(() => {
      setFilters(prevFilters => ({
        ...prevFilters,
        name: pokemon
    }))
    }, 700);

  return () => clearTimeout(getData)
}, [pokemon])


  return (
   
    <form>
      <div className="relative w-full max-w-md mx-auto">
        <input
          type="text"
          placeholder="Buscar Pokémon..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 ease-in-out"
          onChange={(e) => setPokemon(e.target.value)}
        />
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.9 14.32l5.388 5.388a1.25 1.25 0 01-1.768 1.768l-5.388-5.388A7.5 7.5 0 1112.9 14.32zm-6.65 0a5.5 5.5 0 110-11 5.5 5.5 0 010 11z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </form>
  )
}

export default PokemonSearch