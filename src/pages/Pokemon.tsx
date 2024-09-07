import { useParams } from "react-router-dom";
import usePokemon from "../hooks/usePokemon";
import { typeColors } from "../utils/color";

const Pokemon = () => {
    const { id } = useParams();
    const { pokemon, isLoading } = usePokemon(id);

    if (isLoading) return <p>Cargando...</p>;
    if (!pokemon) return null;

    const primaryType = pokemon.types[0];
    const backgroundCardColor = typeColors[primaryType] || "bg-gray-400";

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center relative overflow-hidden">
            <section className=" w-full h-[60vh] bg-gradient-to-r from-indigo-500 via-purple-700 to-pink-700">
            <div className="flex flex-col items-center justify-center p-6 text-white">
                    <h1 className="text-6xl font-bold capitalize animate-fade-in-down">{pokemon.name}</h1>
                    <p className="text-2xl mt-4">Pokedex #{pokemon.id}</p>
                </div>
                <div className="w-full flex justify-center items-center">
                    <img
                        className="h-80 w-80 object-contain transition-transform duration-1000 ease-out transform hover:scale-110"
                        src={pokemon.sprites.other["official-artwork"].front_default}
                        alt={pokemon.name}
                    />
                </div>
               
            </section>

            <section className="w-full max-w-7xl px-8 py-12  -mt-24 bg-white rounded-t-3xl shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 p-6 bg-white shadow-lg rounded-xl">
                        <h2 className="text-3xl font-semibold mb-4">Estadísticas</h2>
                        <ul className="space-y-4">
                            {pokemon.stats.map((stat) => (
                                <li key={stat.stat.name} className="flex items-center gap-4">
                                    <span className="w-40 text-left capitalize text-lg font-semibold">{stat.stat.name}:</span>
                                    <div className="w-full bg-gray-300 rounded-full h-4 shadow-inner">
                                        <div
                                            className={`h-full ${backgroundCardColor} rounded-full transition-all duration-700`}
                                            style={{ width: `${stat.base_stat}%`, maxWidth: '100%' }}
                                        ></div>
                                    </div>
                                    <span className="text-lg font-bold text-gray-800">{stat.base_stat}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-1 p-6 bg-white shadow-lg rounded-xl">
                        <h2 className="text-3xl font-semibold mb-4">Top 3 Movimientos</h2>
                        <ul className="space-y-4">
                            {pokemon.moves
                                .sort((a, b) => b.power - a.power)
                                .slice(0, 3)
                                .map((move, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center justify-between transition-all hover:bg-gray-100 rounded-lg p-3"
                                    >
                                        <span className="capitalize text-xl font-bold text-gray-800">{move.name}</span>
                                        <span className="text-lg font-bold">{move.power}</span>
                                        <span
                                            className={`text-white py-1 px-4 rounded-full capitalize ${typeColors[move.type.name]} shadow-md`}
                                        >
                                            {move.type.name}
                                        </span>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center space-y-6 bg-gray-50 p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold">Detalles</h3>
                    <div className="flex justify-around w-full">
                        <span className="text-gray-700 text-xl"><strong>Altura:</strong> {pokemon.height / 10} m</span>
                        <span className="text-gray-700 text-xl"><strong>Peso:</strong> {pokemon.weight / 10} kg</span>
                    </div>
                </div>
            </section>

            
             </div>
    );
};

export default Pokemon;
