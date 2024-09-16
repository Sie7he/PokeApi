import { useEffect, useState } from "react";
import { PokemonData } from "../types/pokemon";
import { getPokemonByName, getPokemonsByType, getPokemonsPagination } from "../services/request";
import { useFilterContext } from "./useFilterContext";



export const usePokemones = (offset : number, sortOrder : 'asc' | 'desc') => {


const [pokemon, setPokemon] = useState<PokemonData[]>([]);
const [isLoading, setIsLoading] = useState<boolean>(true);
const [error, setError] = useState<string | null>(null);
const {filters} = useFilterContext();
console.log(filters)


    useEffect(() => {
        async function fetchPokemones() {
          try {
             
              let pokemones: PokemonData[];
              if(filters.name.length > 0) {
                pokemones = await getPokemonByName(filters.name.toLowerCase());
              }

              else if(filters.types !== 'all') {
                pokemones = await getPokemonsByType(filters.types);
              } else {
                pokemones = await getPokemonsPagination(offset);
              } 

              pokemones = pokemones.sort((a,b) => {
                return sortOrder === 'asc' ? a.id - b.id : b.id - a.id
              })

                setPokemon(pokemones);
      
          } catch (error) {
              setError((error as Error).message);
          } finally {
              setIsLoading(false);
          }
        }
        fetchPokemones()
      }, [offset, filters, sortOrder])

      return {pokemon, isLoading, error}
}