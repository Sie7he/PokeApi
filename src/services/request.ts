import { PokemonData, Types } from "../types/pokemon";

const baseURL = 'https://pokeapi.co/api/v2/'

export async function getTypes() : Promise<Types[]>{
try {
    const response = await fetch(baseURL+'type?offset=0&limit=21')
    if(response.ok) {
        const data = await response.json();
        return data.results;
    } else {
        throw new Error('Error al traer los tipos de pokemons')
    }
} catch (error) {
    console.log(error)
}
 return []

}


export async function getPokemonByName(name: string):Promise<PokemonData[]> {

   try {
    const response = await fetch(`${baseURL}pokemon/${name.toLocaleLowerCase()}`)
    if(response.ok) {
        const data = await response.json();
        return [{
            id: data.id,
            name: data.name,
            types: data.types,
            sprites: data.sprites
        }]
    } else {
        throw new Error('Error')
    }
   } catch (error) {
     console.log(error)
   }

    return [];

}

export async function getPokemonsPagination(offset: number):Promise<PokemonData[]> {
    try {
        const response = await fetch(`${baseURL}pokemon?limit=20&offset=${offset}`);
        if (response.ok) {
            const data = await response.json();
            const pokemons = data.results.map(async(poke: any) => {
                const res = await fetch(poke.url);
                const { id, name, types, sprites }: PokemonData = await res.json();
                return { id, name, types, sprites }
            })  
            const results = await Promise.all(pokemons);
            
            return results;
        } else {
            throw new Error('Error al traer pokemones');
        }
    
       } catch (error) {
        console.log(error);
       }
       return []
}

export async function getPokemonsByType(type: string): Promise<PokemonData[]> {
    const response = await fetch(`${baseURL}type/${type}`);
    const data = await response.json();
    const pokemones = await Promise.all(
        data.pokemon.map(async (p: any) => {
            const res = await fetch(p.pokemon.url);
            return await res.json();
        })
    );
    return pokemones;
}

export async function getPokemon(id: string | undefined) {
   try {
    const response = await fetch(baseURL+'pokemon/'+id)
    if (response.ok) {
        const data = await response.json();
        const moves =  data.moves.slice(0,5).map(async(m:any) => {
           const moves = await fetch(m.move.url);
           const {name, power, type} = await moves.json();
           return {name, power, type}
        });
        const movesArray = await Promise.all(moves);
        const pokemonDetail = {
            id: data.id,
            name: data.name,
            height: data.height,
            weight: data.weight,
            stats: data.stats,
            sprites: data.sprites,
            types: data.types.map((t:any) => t.type.name),
            moves: movesArray

           }
        return pokemonDetail;
    } else{
        throw new Error('Error al obtener datos del pokemon')
    }
   } catch (error) {
    console.log(error);
   }
}