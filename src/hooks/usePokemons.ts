import { useEffect, useState } from "react";
import { PokemonData } from "../types/pokemon";
import { getPokemonsByType, getPokemonsPagination } from "../services/request";
import { useFilterContext } from "./useFilterContext";



export const usePokemones = (offset : number) => {


const [pokemon, setPokemon] = useState<PokemonData[]>([]);
const [isLoading, setIsLoading] = useState<boolean>(true);
const [error, setError] = useState<string | null>(null);
const {filters} = useFilterContext();


    useEffect(() => {
        async function fetchPokemones() {
          try {
             
              let pokemones: PokemonData[];

              if(filters.types !== 'all') {
                pokemones = await getPokemonsByType(filters.types);
              } else {
                pokemones = await getPokemonsPagination(offset);
              } 
                setPokemon(pokemones);
      
          } catch (error) {
              setError((error as Error).message);
          } finally {
              setIsLoading(false);
          }
             
          }
          fetchPokemones();
      }, [offset, filters])

      return {pokemon, isLoading, error}
}