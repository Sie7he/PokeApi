import PokemonCard from './PokemonCard';
import { PokemontListProps } from '../types/pokemon';


const PokemontList = ({pokemon, isLoading, error}:PokemontListProps) => {

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
    
      <div className='w-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {pokemon.map((poke) => (
          <PokemonCard id={poke.id} name={poke.name} types={poke.types} sprites={poke.sprites} key={poke.id} />
        ))}
      </div>
    

    </>
  )
}

export default PokemontList