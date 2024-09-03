import { useState } from 'react';
import { usePokemones } from '../hooks/usePokemons'
import PokemonCard from './PokemonCard';
import PokemonFilter from './PokemonFilter';
import PokemonPagination from './Pagination';
import { FaSort } from "react-icons/fa";
import { useFilterContext } from '../hooks/useFilterContext';

const PokemontList = () => {

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



  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
    <img src='/pokemon.svg' className='w-56'/> 
      <PokemonFilter />
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handleSort}
          className="p-2 bg-red-500 text-white rounded"
        >
          <FaSort />
        </button>
      </div>
      <div className='w-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {pokemon.map((poke) => (
          <PokemonCard id={poke.id} name={poke.name} types={poke.types} sprites={poke.sprites} key={poke.id} />
        ))}
      </div>
      {filters.types !== 'All' &&
        (
          <PokemonPagination offset={offset} onNext={handleNext}
            onPrev={handlePrev} />
        )}

    </>
  )
}

export default PokemontList