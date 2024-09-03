import { useState } from 'react';
import { usePokemones } from '../hooks/usePokemons'
import PokemonCard from './PokemonCard';
import PokemonFilter from './PokemonFilter';
import PokemonPagination from './Pagination';

const PokemontList = () => {

  const [offset, setoffset] = useState(0)

    const {pokemon, isLoading, error} = usePokemones(offset);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

  return (
    <>
    <PokemonFilter />
    <div className='w-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
    {pokemon.map((poke) => (
      <PokemonCard id={poke.id} name={poke.name} types={poke.types} sprites={poke.sprites} key={poke.id}/>
    ))}
    </div>
     <PokemonPagination offset={offset} onNext={() => setoffset(prevState => prevState +20)}  
     onPrev={() => setoffset(prevState => Math.max(0, prevState -20))} />
    </>
  )
}

export default PokemontList