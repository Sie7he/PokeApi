import { useParams } from "react-router-dom"
import usePokemon from "../hooks/usePokemon";

const Pokemon = () => {
    const { id } = useParams();
    const { pokemon, isLoading } = usePokemon(id);
    const typeColors: { [key: string]: string } = {
        fire: 'bg-red-500',
        water: 'bg-blue-500',
        grass: 'bg-green-500',
        electric: 'bg-yellow-500',
        ice: 'bg-blue-300',
        fighting: 'bg-orange-700',
        poison: 'bg-purple-500',
        ground: 'bg-yellow-700',
        flying: 'bg-blue-300',
        psychic: 'bg-pink-500',
        bug: 'bg-green-700',
        rock: 'bg-yellow-800',
        ghost: 'bg-purple-700',
        dragon: 'bg-purple-800',
        dark: 'bg-gray-800',
        steel: 'bg-gray-500',
        fairy: 'bg-pink-300',
        normal: 'bg-gray-400',
    };
    if(isLoading) return <p>Cargando...</p>
    if (!pokemon) return null;

    const primaryType = pokemon.types[0].type.name;
    const backgroundColor = typeColors[primaryType] || 'bg-gray-400';
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-lg w-full bg-white rounded-xl shadow-md overflow-hidden">
                <div className={`p-4 ${backgroundColor} text-white`}>
                    <div className="flex items-center justify-center">
                        <img className="h-24 w-24" src={pokemon.sprites.front_default} alt={pokemon.name} />
                        <div className="ml-4">
                            <h1 className="text-2xl font-bold capitalize">{pokemon.name}</h1>
                            <p className="text-sm">#{pokemon.id}</p>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">Detalles</h2>
                   <div className="flex justify-around">
                   <span className="text-gray-700"><strong>Altura:</strong> {pokemon.height / 10} m</span>
                   <span className="text-gray-700"><strong>Peso:</strong> {pokemon.weight / 10} kg</span>
                   </div>

                    <h2 className="text-xl font-semibold mt-4">Estadísticas</h2>
                    <ul className="space-y-2">
                        {pokemon.stats.map((stat) => (
                            <li key={stat.stat.name} className="grid grid-cols-3 gap-4 items-center">
                                <span className="font-medium capitalize text-left">{stat.stat.name}:</span>
                                <span className="text-center">{stat.base_stat}</span>
                                <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
                                    <div className={`h-full bg-black`} style={{ width: `${stat.base_stat}%` }}></div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <h2 className="text-xl font-semibold mt-4">Movimientos</h2>
                    <ul className="space-y-2">
                        {pokemon.moves.slice(0, 3).map((move, index) => (
                            <li key={index} className="flex items-center">
                                <span className="capitalize">{move.move.name}</span>
                               
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Pokemon