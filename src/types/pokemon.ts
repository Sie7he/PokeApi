export type Types = {
    name: string;
    url: string;
}

export type PokemonData = {
    id: number,
    name: string;
    types: { type: { name: string } }[];
    sprites: { 
        other: {
            "official-artwork": {
            front_default: string;
        }

    } };
};

export type PokemonDetail = {
    id: number;
    name: string;
    height: number;
    weight: number;
    stats: {
        base_stat: number;
        stat: {
            name: string;
        };
    }[];
    moves: {
            name: string;
            power: number;  
            type:{
                name: string;
            }
    }[];
    types: string[];
    sprites: {
        front_default: string;
        other: {
            "official-artwork": {
            front_default: string;
        }}
    };
};

export type PokemontListProps = {
    pokemon: PokemonData[];
    isLoading: boolean;
    error: string | null;
  }

