import  { useState } from 'react'
import { usePokemones } from '../hooks/usePokemons';
import { useFilterContext } from '../hooks/useFilterContext';
import { FaSort } from "react-icons/fa";
import PokemonFilter from '../components/PokemonFilter';
import PokemontList from '../components/PokemontList';
import PokemonPagination from '../components/Pagination';


const PokemonHome = () => {
    const [offset, setoffset] = useState(0)
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const { pokemon, isLoading, error } = usePokemones(offset, sortOrder);
    const { filters } = useFilterContext();

    const handleSort = () => {
        setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'))
      }
      const handlePrev = () => {
        setoffset(prevState => Math.max(0, prevState - 20))
      }
      const handleNext = () => {
        setoffset(prevState => prevState + 20)
      }
    

  return (
    <div className='max-w-screen-xl mx-auto'>
    <img src='/pokemon.svg' className='w-56'/> 
      <PokemonFilter />
        <button
          onClick={handleSort}
          className="p-2 bg-red-500 text-white rounded"
        >
          <FaSort />
        </button>
        <PokemontList pokemon={pokemon} isLoading={isLoading} error={error}
        />
          {filters.types === 'all' &&
        (
          <PokemonPagination offset={offset} onNext={handleNext}
            onPrev={handlePrev} />
        )}
    </div>
  )
}

export default PokemonHome