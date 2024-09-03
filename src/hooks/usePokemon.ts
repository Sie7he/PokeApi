import { useEffect, useState } from 'react'
import { PokemonDetail } from '../types/pokemon';
import { getPokemon } from '../services/request';

const usePokemon = (id: string | undefined) => {
    const [pokemon, setPokemon] = useState<PokemonDetail>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchPokemon () {
          try {
              const pokemon = await getPokemon(id);
              setPokemon(pokemon);
          } catch (error) {
              setError((error as Error).message)
          } finally {
              setIsLoading(false);
          }
  
        }
      fetchPokemon()
       
      }, [])

      return {pokemon, isLoading, error}
}

export default usePokemon