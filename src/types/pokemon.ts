export type Types = {
    name: string;
    url: string;
}

export type PokemonData = {
    id: number,
    name: string;
    types: { type: { name: string } }[];
    sprites: { front_default: string };
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
        move: {
            name: string;
        };
    }[];
    types: { type: { name: string } }[];
    sprites: {
        front_default: string;
    };
};



